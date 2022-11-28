# Проєктування бази даних

## модель бізнес-об'єктів

<center>  

@startuml 

entity Role #eeffff
entity Role.Name
entity Role.Description

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

entity QuizResult #eeffff

entity Quiz  #eeffff
entity Quiz.Name
entity Quiz.ID
entity Quiz.Description
entity Quiz.Link
entity Quiz.End_Date

entity QuizResult.Data

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description
entity Question.Answer_Variants
entity Question.Type

entity Access

object Respondent #ffffff
object Interviewer #ffffff

Group "0,*" -d-> "0,1" Access : create_group
Group "1,1" -r-> "0,*" Quiz

Access "0.*" -d-> "1,1" User
Access "0.*" -d-> "1,1" Role

Quiz "1,1"-r-> "0,1" QuizResult
Quiz "1,1" -d-> "0,*" Question
Quiz "0,*" -r-> "0,1" Access : create_quiz

Role.Name -u-* Role
Role.Description -u-* Role

User.Name -u-* User
User.Email -u-* User
User.Password -u-* User
User.Photo -u-* User
User.Authorization_Token -r-* User

Group.Name -d-* Group
Group.ID -d-* Group
Group.Creator -d-* Group
Group.Description -d-* Group

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

Respondent .d.> Role : instanceOf
Interviewer .r.> Role : instanceOf

@enduml    

</center>  

## ER-модель

<center>  

@startuml   

namespace GroupManagement {

    entity Group <<ENTITY>> {
        Name: TEXT 
        ID: TEXT
        Description: TEXT 
        Creator: TEXT 
    }
}

namespace AccessManagement {

    object Respondent #ffffff
    
    object Interviewer #ffffff

    entity Role <<ENTITY>> #ffff00 {
        Name: TEXT
        Descritpion: TEXT
    }
    entity Access <<ENTITY>> {
    }
}

namespace UserManagement {

    entity User <<ENTITY>> {
        Name: TEXT 
        Email: TEXT 
        Authorization_Token: TEXT 
        Password: TEXT 
        Photo: IMAGE
    }  
}

namespace QuizManagement {

    entity Quiz <<ENTITY>>{
        Name: TEXT 
        ID: TEXT
        Description: TEXT 
        Link: TEXT 
        End_Date: DATE
    } 
     
    namespace QuestionManagement {
    
        entity Question <<ENTITY>>{
            Name: TEXT 
            ID: TEXT 
            Description: TEXT
            Answer_Variants: TEXT
            Type: TEXT
        }
    }
}

namespace AnalyseManagement {

    entity QuizResult <<ENTITY>> {
        Data: TEXT 
    }  
}

Access "0,*" --u-> "1,1" Role
Access "0,*" --l-> "1,1" User

Group "0,*" --d-> "1,1" Access : create_group
Group "1,1" --d-> "0,*" Quiz

Quiz "1,1"-r-> "0,1" QuizResult
Quiz  "1,1" -d-> "0,*"Question
Quiz "0,*" -r-> "0,1" Access : create_quiz

Respondent ..> Role : instanceOf
Interviewer ..> Role : instanceOf

@enduml    

</center>

- реляційна схема
