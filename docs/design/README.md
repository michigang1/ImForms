# Проєктування бази даних

## модель бізнес-об'єктів

<center>  

@startuml  

entity Variant #eeffff
entity Question #eeffff
entity QuestionType #eeffff
entity Selection #eeffff
entity Response #eeffff
entity Session #eeffff
entity Respondent #eeffff
entity User #eeffff
entity Grant #eeffff
entity Quiz #eeffff
entity Action #eeffff
entity ActionType #eeffff
entity State #eeffff

entity Role #eeffff
entity Role.ID
entity Role.Name
entity Role.Description

entity User #eeffff   
entity User.Name
entity User.Email
entity User.Authorization_Token
entity User.Password
entity User.Photo

entity Respondent.ID
entity Respondent.Name
entity Respondent.Email

entity Session.ID
entity Session.StartedAt
entity Session.SubmitedAt

entity Group #eeffff
entity Group.Name
entity Group.ID
entity Group.Description
entity Group.Creator

entity Quiz  #eeffff
entity Quiz.Name
entity Quiz.ID
entity Quiz.Title
entity Quiz.Description
entity Quiz.Link
entity Quiz.End_Date

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description
entity Question.Answer_Variants
entity Question.HelpText
entity Question.Required

entity QuestionType.ID
entity QuestionType.Name
entity QuestionType.Description

entity Variant.ID
entity Variant.Title
entity Variant.HelpText

entity Action.ActedAt

entity ActionType.ID
entity ActionType.Name
entity ActionType.Description

entity State.ID
entity State.Name
entity State.Description

Role.ID -u-* Role
Role.Name -u-* Role
Role.Description -u-* Role

User.Name -u-* User
User.Email -u-* User
User.Password -u-* User
User.Photo -u-* User
User.Authorization_Token -u-* User

Group.Name -d-* Group
Group.ID -d-* Group
Group.Creator -d-* Group
Group.Description -d-* Group

Question.Name -u-* Question
Question.ID -u-* Question
Question.Description -u-* Question
Question.Answer_Variants -l-* Question
Question.HelpText -l-* Question
Question.Required -l-* Question

QuestionType.ID -u-* QuestionType
QuestionType.Name -u-* QuestionType
QuestionType.Description -u-* QuestionType

Variant.ID -d-* Variant
Variant.Title -l-* Variant
Variant.HelpText -r-* Variant

Quiz.Name -u-* Quiz
Quiz.ID -u-* Quiz
Quiz.Title -u-* Quiz
Quiz.Description -u-* Quiz
Quiz.Link -u-* Quiz
Quiz.End_Date -u-* Quiz

Selection "0,*" -d-> "1,1" Variant
Selection "0,*" -d-> "1,1" Response

Variant -d-> Question

Question -d-> QuestionType
Question -l-> Quiz

Response "0,*" -d-> "1,1" Session

Session.ID -r-* Session
Session.StartedAt -d-* Session
Session.SubmitedAt -d-* Session

Session "0,*" -r-> "1,1" Quiz
Session "0,*" -d-> "0,1" Respondent

Respondent.ID --* Respondent
Respondent.Name --* Respondent
Respondent.Email --* Respondent

Respondent "0,1" -d-> "0,1" User

Grant "0,*" -u-> "1,1" User
Grant "0,*" -u-> "1,1" Quiz
Grant "0,*" -d-> "1,1" Role

Action "0,*" -l-> "1,1" User
Action "0,*" -d-> "1,1" Quiz
Action "0,*" -l-> "1,1" State
Action "0,*" -u-> "1,1" ActionType

Action.ActedAt -u-* Action

ActionType.ID -d-* ActionType
ActionType.Name -d-* ActionType
ActionType.Description -l-* ActionType

State.ID -u-* State
State.Name -u-* State
State.Description -u-* State

Group "1,1" -d-> "0,*" Quiz

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
namespace Journaling {
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
