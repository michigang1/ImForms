# Проєктування бази даних

## модель бізнес-об'єктів

<center>

@startuml  

entity User #eeffff
entity User.Name 
entity User.Email
entity User.Password
entity User.Authorization_Token
entity User.Photo

entity Group #eeffff
entity Group.Name
entity Group.ID
entity Group.Creator
entity Group.Description
entity Group.Members_List
entity Group.Quiz_List  #eeffff

entity QuizResult #eeffff

entity Quiz  #eeffff
entity Quiz.ID
entity Quiz.Name
entity Quiz.Question_List #eeffff
entity Quiz.Description
entity Quiz.End_Date
entity Quiz.Link

entity QuizResult.Data 

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description
entity Question.Answer_Variants
entity Question.Type

object Respondent #ffffff

object Interviewer #ffffff

User.Name --* User
User.Email -r-* User
User.Password -l-* User
User.Authorization_Token -u-* User
User.Photo --* User

Group "0,*" -- "0,*" User : Respondent 
User "1,1" -- "0,*" Group  : Interviewer 


Quiz "0,*" -- "0,*" User : Respondent 
User "1,1" -- "0,*" Quiz  : Interviewer 
Quiz --* Group.Quiz_List

Group.Name -l-* Group
Group.ID -r-* Group
Group.Creator --* Group
Group.Description --* Group
Group.Quiz_List --* Group
Group.Members_List --* Group

Quiz.ID -l-* Quiz
Quiz.Name -r-* Quiz
Quiz.Question_List -u-* Quiz
Quiz.End_Date --* Quiz
Quiz.Link --* Quiz
Quiz.Description -r-* Quiz


QuizResult --* Quiz
QuizResult.Data --* QuizResult

Question.Name --* Question
Question.ID --* Question
Question.Description --* Question
Question.Answer_Variants --* Question
Question --* Quiz.Question_List
Question.Type -r-* Question 

Respondent --|> User
Interviewer --|> User

@enduml  

</center>  

## ER-модель

<center>  

@startuml   

namespace groupManagement {

entity Group <<ENTITY>>{
    Creator: TEXT 
    Name: TEXT 
    Description: TEXT 
    ID: TEXT
    Quiz_List: TEXT 
    Members_List: TEXT 
} 
}

namespace UserProfileManagement {

object Respondent #ffffff

object Interviewer #ffffff
 

entity User <<ENTITY>>{
    Name: TEXT 
    Email: TEXT 
    Authorization_Token: TEXT 
    Password: TEXT 
    Photo: IMAGE
}  
 } 

namespace quizManagement {

entity Quiz <<ENTITY>>{
    Name: TEXT 
    Description: TEXT 
    ID: TEXT 
    Link: TEXT 
    End_Date: DATE
    Qwestion_list: TEXT 
} 
 
entity Question <<ENTITY>>{
    Name: TEXT 
    ID: TEXT 
    Description: TEXT
    Answer_Variants: TEXT
    Type: TEXT
}
}

namespace analize {

entity QuizResult <<ENTITY>>{
    Data: TEXT 
}  
}

    
Question --* Quiz
QuizResult --* Quiz
Quiz --* Group
Quiz "0,*" -d- "0,*" User : Respondent 
User "1,1" -u- "0,*" Quiz  : Interviewer 
Group "0,*" -u- "0,*" User : Respondent 
User "1,1" -d- "0,*" Group  : Interviewer 
Respondent --|> User
Interviewer --|> User  

@enduml  

</center>   
- реляційна схема
