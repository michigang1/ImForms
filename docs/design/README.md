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
entity User.Role #eeffff

entity Group #eeffff
entity Group.Name
entity Group.ID
entity Group.Creator
entity Group.Description
entity Picture

entity Quiz  #eeffff
entity Quiz.ID
entity Quiz.Name
entity Quiz.Qwestion_list
entity Quiz.Description
entity Quiz.End_Date
entity Quiz.Link
entity Quiz.Data

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description

entity Respondent

entity Interviewer

entity QuizResult #eeffff

User.Name --* User
User.Email -r-* User
User.Password -l-* User
User.Authorization_Token -u-* User
Group *-- User
Quiz*-- User
Quiz --* Group
User.Role --* User

Group.Name -l-* Group
Group.ID -r-* Group
Group.Creator --* Group
Group.Description --* Group
Picture --* Group

Quiz.ID --* Quiz
Quiz.Name -l-* Quiz
Quiz.Qwestion_list -r-* Quiz
Quiz.Description -u-* Quiz
Quiz.End_Date --* Quiz
Quiz.Link --* Quiz
QuizResult --* Quiz
QuizResult --* Interviewer 
Quiz.Data --* QuizResult

Question.Name --* Question
Question.ID --* Question
Question.Description --* Question
Question --* Quiz

Respondent --* User.Role
Interviewer --* User.Role
User --* Group.Creator
QuizResult --* Respondent
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

