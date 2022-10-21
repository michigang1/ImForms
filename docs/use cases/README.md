В даному файлі наведені графічні діаграми що відображують бізнес процеси.
Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/).

В markdown-файлі використовується опис діаграми

## Діаграма прецедентів

@startuml
actor Guest
actor User
actor Interviewer

usecase "<b>GUEST\nЗареєструватись та авторизуватись" as G
usecase "<b>USER\nОтримати та пройти опитування" as U
usecase "<b>INTERVIEWER\nСтворити та редагувати опитування\nСтворити та редагувати експертну групу" as I

User -u-|> Guest
Interviewer -u-|> User

Guest -> G
User -> U
Interviewer -> I
@enduml

## Схеми використання для користувача

@startuml
actor Guest

usecase "<b>GUEST\nЗареєструватись та авторизуватись" as G
usecase "<b>GUEST.CREATE_ACC\nЗареєструвати користувача" as GC
usecase "<b>GUEST.LOGIN\nАвторизувати користувача" as GL
Guest -r-> G

G .u.> GL
G .u.> GC
@enduml

## Схеми використання для авторизованого користувача

@startuml
actor User

usecase "<b>USER\nОтримати та пройти опитування" as U

usecase "<b>USER.ANSWER\nВідправити заповнену анкету" as UA
usecase "<b>USER.GET_QUIZ\nОтримання опитування" as UG
usecase "<b>USER.DELETE_ACC\nВидалити свій акаунт" as UD

User -r-> U

U .u.> UA
U .u.> UG
U .d.> UD
@enduml

## Схеми використання для інтервьюєра

@startuml
actor Interviewer

usecase "<b>INTERVIEWER\nСтворити та редагувати опитування\nСтворити та редагувати експертну групу" as I

usecase "<b>INT.CREATE_QUIZ\nСтворити опитування" as ICQ
usecase "<b>INT.DELETE_QUIZ\nВидалити опитування" as IDQ
usecase "<b>INT.EDIT_QUIZ\nВнести зміни в існуюче опитування" as IEQ

usecase "<b>INT.ADD_MEMBER\nЗапросити учасника до групи" as IAM
usecase "<b>INT.DELETE_MEMBER\nВидалити учасника з групи" as IDM
usecase "<b>INT.GET_RES\nОтримати результати опитування" as IGR

usecase "<b>INT.CREATE_GROUP\nСтворити групу" as ICG
usecase "<b>INT.GET_GROUP\nОтримати інформацію про групу" as IGG
usecase "<b>INT.DELETE_GROUP\nВидалити групу" as IDG

Interviewer -r-> I

I .u.> ICQ
I .u.> IDQ
I .u.> IEQ

I .r.> IDM
I .r.> IAM
I .d.> IGR

I .d.> ICG
I .d.> IGG
I .d.> IDG

@enduml