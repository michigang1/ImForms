# Тестування працездатності системи

*В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*

*Використовувався Postman*

----

## Перший POST запит - створення нового рядка (id=1 повернулось як відповідь):

<p align="center">
  <img src="./post1.png">
</p>

## POST запит - створення нового рядка з недостатньою кількістю полів:

<p align="center">
  <img src="./post2.png">
</p>

## GET запит по існуючому id:

<p align="center">
  <img src="./get1.png">
</p>

## GET запит по неіснуючому id:

<p align="center">
  <img src="./get2.png">
</p>

## PUT запит - зміна поля певного рядка:

<p align="center">
  <img src="./put.png">
</p>

## GET запит - підтвердження оновлення рядка

<p align="center">
  <img src="./put_check.png">
</p>

## PUT запит - зміна поля певного рядка по неіснуючому id:

<p align="center">
  <img src="./put2.png">
</p>

## GET запит - зчитування усієї таблиці (1 рядок): 

<p align="center">
  <img src="./get_all.png">
</p>

## DELETE запит по неіснуючому id:

<p align="center">
  <img src="./delete1.png">
</p>

## DELETE запит по існуючому id:

<p align="center">
  <img src="./delete2.png">
</p>

## Останній GET запит (порожня таблиця - Status 204 No Content ): 

<p align="center">
  <img src="./get_last.png.png">
</p>
