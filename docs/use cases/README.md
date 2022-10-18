# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

**Діаграма прецедентів**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
actor Guest
actor User
actor Interviewer

User -u-|> Guest
Interviewer-u-|> User

usecase "**NOT_LOGGED**\nЗареєструватись та авторизуватись" as NL
usecase "**LOGGED**\nОтримати та пройти опитування" as U
usecase "**GROUP**\nСтворити та редагувати організацію\nСтворити, аналізувати та редагувати опитування" as O
Guest -r-> NL
User -r-> U
Interviewer -r-> O
@enduml
</center>
<br>
**Схеми використання для незареєстрованого користувача**
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
actor Guest

usecase "**NOT_LOGGED**\nЗареєструватись або авторизуватись" as NL

Guest-r-> NL

usecase "**GUEST.CREATE_ACC**\nЗареєструватись у системі" as REG
usecase "**GUEST.LOGIN**\nАвторизуватись у системі" as AUTH

NL .u.> REG : extends
NL .u.> AUTH : extends
@enduml

</center>
<br>
**Схеми використання для зареєстрованого користувача**
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
actor User

usecase "**AUTHORIZED_USER**\nОтримати та пройти опитування" as U

User -r-> U

usecase "**USER.GET_QUIZ**\nОтримати дані для проходження опитування" as GET
usecase "**USER.ANSWER**\nНадіслати дані про проходження опитування" as SEND
usecase "**USER.DELETE_ACC**\nМожливість видалити акаунт" as GET_REVIEW

U .u.> GET : extends
U .u.> SEND : extends
U .d.> GET_REVIEW : extends
@enduml

</center>
<br>
**Схеми використання для інтерв'юєра**
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
actor Interviewer

usecase "**GROUP**\nСтворити та редагувати групу\nСтворити та редагувати опитування" as O

Interviewer -r-> O

usecase "**INT.CREATE_GROUP **\nСтворити групу" as CREAT
usecase "**INT.DELETE_GROUP**\nВидалити групу" as DELETE
usecase "**INT.ADD_MEMBER **\nДодати учасника до групи" as ADD
usecase "**INT.CREATE_QUIZ  **\nСтворити опитування" as CREATE_QUIZ
usecase "**INT.EDIT_QUIZ**\nЗмінити дані про опитування" as EDIT_QUIZ
usecase "**INT.GET_RES**\nОтримати результати опитування" as GET_RES
usecase "**INT.DELETE_MEMBER**\nВидалити учасника з нрупи" as DELETE_MEMBER
usecase "**INT.DELETE_QUIZ**\nВидалити опитування" as DELETE_QUIZ

O .u.> CREAT : extends
O .u.> DELETE : extends
O .u.> ADD: extends
O .r.> CREATE_QUIZ : extends
O .d.> EDIT_QUIZ : extends
O .d.> GET_RES : extends
O .d.> DELETE_MEMBER: extends
O .d.> DELETE_QUIZ: extends
@enduml
</center>