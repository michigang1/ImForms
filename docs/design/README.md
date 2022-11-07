# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
<center>
@startuml
entity User #eeffff
entity User.Name 
entity Email
entity Password
entity Salt
entity Authorization_Token

entity Organization #eeffff
entity Organization.Name
entity Organization.Creation_date
entity Creator #aaaeee
entity Organization.Description #aaaeee
entity Picture #aaaeee 
entity Address #aaaeee
entity Poll

entity PollType.Name
entity PollType.Description #aaaeee

entity BlackListedUser #eeffff
entity BL_User
entity BL_Poll 

entity WhiteListedUser #eeffff
entity WL_User
entity WL_Poll 

entity Poll #eeffff
entity Poll.Title
entity Poll.Description
Entity Poll.CreationDate
entity End_Date
entity IsWhiteList
entity IsBlackList
entity IsPrivate
entity Link
entity Poll.Type #eeffff

entity QuestionType #eeffff
entity QuestionType.Name
entity QuestionType.Description

entity AnswerOption #eeffff
entity Text
entity Index

entity Question #eeffff
entity Question.Title
entity Question.Description
entity Question.Type

entity Answer #eeffff
entity Content

entity PollResult #eeffff
entity Date
entity Respondent


entity QuestionFeedback #eeffff
entity QF_Comment
entity QF_Question

entity PollFeedback #eeffff
entity GeneralComment
entity Rating #aaaeee
entity MaxRating #aaaeee
entity Reviewer
entity PF_Poll



User.Name --* User
Email -r-* User
Password --* User
Salt -l-* User
Authorization_Token -u-* User
Poll "0,*"--*"1,1" User
Organization "0,*"--*"0,*" User
PollFeedback "0,*"--*"1" User

Organization.Name -l-* Organization
Organization.Creation_date -u-* Organization
Creator *-d-* Organization
Organization.Description --* Organization
Picture -d-* Organization
Address -r-* Organization
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
entity QuizResult #eeffff

entity Question #eeffff
entity Question.Name
entity Question.ID
entity Question.Description

entity Respondent
entity Interviewer

User.Name --* User
User.Email -r-* User
User.Password -l-* User
User.Authorization_Token -u-* User
Group *-- User
Quiz*--* User
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
@enduml
</center>
- ER-модель
- реляційна схема

