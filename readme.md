# Опис роутів

## Authentication

- **`https://nodejs-2.onrender.com/auth/register`** - POST запит, Створенняя нового користувача у додатку;
    - Зразок body:      
        {          
        name: String required,  
        email: `qwerty@qwerty.com`,  
        password: min(6) required,  
        subscription: "starter", "pro", "business" required    
    }
- **`https://nodejs-2.onrender.com/auth/login`** - POST запит, Реєстрація користувача у додатку;
    - Зразок body:      
        {          
        email: `qwerty@qwerty.com`,  
        password: min(6) required,  
        }

- **`https://nodejs-2.onrender.com/auth/logout`** - POST запит, Вихід користувача з додатку;
- **`https://nodejs-2.onrender.com/auth/current`** - GET запит, Перевірка що користувач зареєстрований у додатку;
- **`https://nodejs-2.onrender.com/auth/verify`** - POST запит,  повторна відправка листа для підтвердження Email;
    - Зразок body:      
        {          
        email: `qwerty@qwerty.com`,  
        }


##  Користувач

- **`https://nodejs-2.onrender.com/users`** - PATH запит, зміна підписки;
    - Зразок body:      
        {          
        subscription: "starter", "pro", "business" required    
        }

- **`https://nodejs-2.onrender.com/users/avatars `**-  PATH запит, встановлення кастомної аватарки користувача;
##  Контакти
- **`https://nodejs-2.onrender.com/contacts`** - GET запит, вертає усі контакти користувача;
 - **`https://nodejs-2.onrender.com/contacts/:contactId`** - GET запит, пошук контакта по id ;
 - **`https://nodejs-2.onrender.com/contacts`** - POST запит, додавання контакту;
    - Зразок body:      
        {  
        name: string required,             
        email: `qwerty@qwerty.com` required,   
	    phone: (123) 123-1234 required,   
	    favorite: boolean,              
        }
 - **`https://nodejs-2.onrender.com/contacts/:contactId`** - DELETE запит, видалення контакту за id;
 - **`https://nodejs-2.onrender.com/contacts/:contactId`** - PUT запит, редагування контакту за id;
    - Зразок body:      
        {  
        name: string .required,             
        email: `qwerty@qwerty.com` required,   
	    phone: (123) 123-1234 required,   
	    favorite: boolean,              
        }
 - **`https://nodejs-2.onrender.com/contacts/:contactId/favorite`** - PATCH запит, редагування поля favorite (true, false) у контакті;
    - Зразок body:      
        {  
	    favorite: boolean,              
        }
 - **`https://nodejs-2.onrender.com/contacts/:contactId/avatars `**- PATCH запит, зміна аватарки контакту
