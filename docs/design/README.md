# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів  

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

entity QuizResult #eeffff

entity Quiz  #eeffff
entity Quiz.ID
entity Quiz.Name
entity Quiz.Qwestion_list
entity Quiz.Description
entity Quiz.End_Date
entity Quiz.Link
entity QuizResult.Data 

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description

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
Quiz --* Group

Group.Name -l-* Group
Group.ID -r-* Group
Group.Creator --* Group
Group.Description --* Group

Quiz.ID --* Quiz
Quiz.Name -l-* Quiz
Quiz.Qwestion_list -r-* Quiz
Quiz.Description -u-* Quiz
Quiz.End_Date --* Quiz
Quiz.Link --* Quiz

QuizResult --* Quiz
QuizResult.Data --* QuizResult

Question.Name --* Question
Question.ID --* Question
Question.Description --* Question
Question --* Quiz

Respondent --|> User
Interviewer --|> User  

@enduml  

</center>

- ER-модель   
<center>   
@startuml   
    entity Group <<ENTITY>>{
    Creator: TEXT 
    Name: TEXT 
    Description: TEXT 
    Picture: IMAGE
    ID: TEXT 
    }  
    entity User <<ENTITY>>{
    Name: TEXT 
    Email: TEXT 
    Creator: TEXT 
    Authorization_Token: TEXT 
    Password: TEXT 
    }  
    entity User.Role <<ENTITY>>{
    Respondent: TEXT
    Interviewer: TEXT
    }  
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
    }  
    entity QuizResult <<ENTITY>>{
    Data: DATA
    Respondent: TEXT
    Interviewer: TEXT
    }  
    
    Question --* Quiz
    QuizResult --* Quiz
    Quiz --* Group
    Quiz -- User
    Group -- User
    User.Role --* User   
@enduml   
</center>   
- реляційна схема

