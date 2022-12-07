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
    
namespace QuestionsContent {    
 entity Variant {}
 entity Question {}
 entity QuestionType {}
}
namespace AnswersRecording {
 entity Selection {}
 entity Response {}
}
namespace RespondentIdentification {
 entity User {}
 entity Respondent {}
 entity Session {}
}
namespace AccessControl {
 entity Quiz {}
 entity Role {}
 entity Grant {}
 entity Group {}
}
namespace Journalism {
 entity Action {}
 entity ActionType{}
 entity State {}
}

entity Variant {
  id: INT
  title: TEXT
  helpText: TEXT
} 
entity Question {
  id: INT
  name: TEXT
  description: TEXT
  title: TEXT
  helpText: TEXT
  required: BOOLEAN
  answer_variants: TEXT
} 
entity QuestionType <<DICTIONARY>>{
  id: INT
  name: TEXT
  desription: TEXT
}
entity Selection {
} 
entity Response {
  id: INT
  textValue: TEXT
} 
entity Session {
  id: INT
  startedAt: DATE
  submitedAt: DATE
} 
entity Respondent {
  id: INT
  name: TEXT
  email: TEXT
} 
entity User {
  id: INT
  name: TEXT
  email: VARCHAR
  password: VARCHAR
  authorization_token: TEXT
  photo: IMAGE
} 
entity Grant {
} 
entity Role <<DICTIONARY>>{
  id: INT
  name: TEXT
  desription: TEXT
} 

entity Quiz {
  id: INT
  name: NEXT
  title: TEXT
  description: TEXT
  link: TEXT
  end_date: DATE
} 
entity Action {
  actedAt: Date
} 
entity ActionType <<DICTIONARY>>{
  id: INT
  name: TEXT
  desription: TEXT
} 
entity State <<DICTIONARY>>{
  id: INT
  name: TEXT
  desription: TEXT
} 
entity Group {
  id: INT
  name: TEXT
  desription: TEXT
  creator: TEXT
}

Selection "0,*" -d-> "1,1" Variant
Selection "0,*" -r-> "1,1" Response

Variant -d-> Question

Question -l-> QuestionType
Question -r-> Quiz

Response "0,*" -d-> "1,1" Session

Session "0,*" -r-> "1,1" Quiz
Session "0,*" -d-> "0,1" Respondent

Respondent "0,1" -r-> "0,1" User

Grant "0,*" -u-> "1,1" User
Grant "0,*" -u-> "1,1" Quiz
Grant "0,*" -d-> "1,1" Role

Action "0,*" -u-> "1,1" User
Action "0,*" -u-> "1,1" Quiz
Action "0,*" -d-> "1,1" State
Action "0,*" -d-> "1,1" ActionType

Group "1,1" -u-> "0,*" Quiz    
   
@enduml    

</center>

- реляційна схема
