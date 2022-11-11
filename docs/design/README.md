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
entity Group.Quiz_List #eeffff

entity QuizResult #eeffff

entity Quiz #eeffff
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

object Respondent #ffffff

object Interviewer #ffffff

User.Name --_ User
User.Email -r-_ User
User.Password -l-_ User
User.Authorization_Token -u-_ User
User.Photo --\* User

Group "0,_" -- "0,_" User : Respondent
User "1,1" -- "0,\*" Group : Interviewer

Quiz "0,_" -- "0,_" User : Respondent
User "1,1" -- "0,_" Quiz : Interviewer
Quiz --_ Group.Quiz_List

Group.Name -l-_ Group
Group.ID -r-_ Group
Group.Creator --_ Group
Group.Description --_ Group
Group.Quiz*List --* Group
Group.Members*List --* Group

Quiz.ID -r-_ Quiz
Quiz.Name -r-_ Quiz
Quiz.Question*List -r-* Quiz
Quiz.End*Date --* Quiz
Quiz.Link --_ Quiz
Quiz.Description -r-_ Quiz

QuizResult --_ Quiz
QuizResult.Data --_ QuizResult

Question.Name --_ Question
Question.ID --_ Question
Question.Description --_ Question
Question.Answer_Variants --_ Question
Question --\* Quiz.Question_List

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
}
}

namespace analize {

entity QuizResult <<ENTITY>>{
Data: TEXT
}  
}

Question --_ Quiz
QuizResult --_ Quiz
Quiz --_ Group
Quiz "0,_" -d- "0,_" User : Respondent
User "1,1" -u- "0,_" Quiz : Interviewer
Group "0,_" -u- "0,_" User : Respondent
User "1,1" -d- "0,\*" Group : Interviewer
Respondent --|> User
Interviewer --|> User

@enduml

</center>   
- реляційна схема
