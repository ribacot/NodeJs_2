# Опис роутів

## Authentication

- ==https://nodejs-2.onrender.com/auth/register== -  POST запит, Створенняя нового користувача у додатку;
- ==https://nodejs-2.onrender.com/auth/login== - POST запит, Реєстрація користувача у додатку;
- https://nodejs-2.onrender.com/auth/logout - POST запит, Вихід користувача з додатку;
- https://nodejs-2.onrender.com/auth/current -GET запит, Перевірка що користувач зареєстрований у додатку;
- https://nodejs-2.onrender.com/auth/verify - POST запит,  повторна відправка листа для підтвердження Email;

##  Зміни для користувача

- https://nodejs-2.onrender.com/users - PAth запит, зміна підписки;
- https://nodejs-2.onrender.com/users/avatars -  PAth запит, встановлення кастомної аватарки користувача;

##  Контакти

- https://nodejs-2.onrender.com/contacts - GET запит, вертає усі контакти користувача;
 - https://nodejs-2.onrender.com/contacts/:contactId - GET запит, пошук контакта по id  
 - https://nodejs-2.onrender.com/contacts - POST запит, додавання контакту;
 - https://nodejs-2.onrender.com/contacts/:contactId - DELETE запит, видалення контакту за id;
 - https://nodejs-2.onrender.com/contacts/:contactId - PUT запит, редагування контакту за id;
 - https://nodejs-2.onrender.com/contacts/:contactId/favorite - PATCH запит, редагування поля favorite (true, false) у контакті;
 - https://nodejs-2.onrender.com/contacts/:contactId/avatars - PATCH запит, зміна аватарки контакту
