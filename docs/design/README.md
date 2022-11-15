# Проєктування бази даних

## модель бізнес-об'єктів

<center>  

@startuml  

entity User #eeffff   
entity User.Name 
entity User.Email
entity User.Authorization_Token
entity User.Password
entity User.Photo

entity Group #eeffff
entity Group.Name
entity Group.ID
entity Group.Description
entity Group.Creator
entity Group.Members_List
entity Group.Quiz_List  #eeffff

entity QuizResult #eeffff

entity Quiz  #eeffff
entity Quiz.Name
entity Quiz.ID
entity Quiz.Description
entity Quiz.Question_List #eeffff
entity Quiz.Link
entity Quiz.End_Date

entity QuizResult.Data 

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description
entity Question.Answer_Variants
entity Question.Type

object Respondent #ffffff
object Interviewer #ffffff

Group "1,*" -d-> "0,*" User 
Group "1,1" -r-> "1,1" Group.Quiz_List
Group.Quiz_List "1,1" -r-> "0,*" Quiz
Quiz "1,1" -r-> "1,1" QuizResult
Quiz "1,1" -d-> "1,1"Quiz.Question_List
Quiz.Question_List "1,1" -d-> "1,*" Question

User.Name -u-* User
User.Email -u-* User
User.Authorization_Token -u-* User
User.Password -u-* User
User.Photo -u-* User

Group.Name -d-* Group
Group.ID -d-* Group
Group.Creator -d-* Group
Group.Description -d-* Group
Group.Members_List -d-* Group

Question.Name -u-* Question
Question.ID -u-* Question
Question.Description -u-* Question
Question.Answer_Variants -u-* Question
Question.Type -u-* Question 

Quiz.Name -d-* Quiz
Quiz.ID -d-* Quiz
Quiz.Description -d-* Quiz
Quiz.Link -d-* Quiz
Quiz.End_Date -d-* Quiz

QuizResult.Data -l-* QuizResult

Respondent .r.> User : instanceOf
Interviewer .r.> User : instanceOf     

@enduml  

</center>  

## ER-модель

<center>  

@startuml   

namespace groupManagement {

    entity Group <<ENTITY>>{
        Name: TEXT 
        ID: TEXT
        Description: TEXT 
        Creator: TEXT 
        Members_List: TEXT 
    }
    
    entity Group.Quiz_List <<ENTITY>>{
    }
}

namespace UserProfileManagement {

    object Respondent #ffffff
    
    object Interviewer #ffffff
     
    
    entity User <<ENTITY>> #ffff00{
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
        ID: TEXT
        Description: TEXT 
        Link: TEXT 
        End_Date: DATE
    } 
     
    entity Question <<ENTITY>>{
        Name: TEXT 
        ID: TEXT 
        Description: TEXT
        Answer_Variants: TEXT
        Type: TEXT
    }
    entity Quiz.Question_List <<ENTITY>>{
    }
}

namespace analize {

    entity QuizResult <<ENTITY>>{
        Data: TEXT 
    }  
}

    
Group "1,*" --d-> "0,*" User
Group "1,1" --r-> "1,1" Group.Quiz_List

Group.Quiz_List "1,1" --r-> "0,*" Quiz

Quiz "1,1" --r-> "1,1" QuizResult
Quiz "1,1" -d-> "1,1" Quiz.Question_List

Quiz.Question_List "1,1" -d-> "1,*" Question

Respondent ..> User : instanceOf
Interviewer ..> User : instanceOf  

@enduml  

</center>   
- реляційна схема
