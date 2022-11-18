# E-Commerce-Back-End

## Description
 - The motivation behind this project was to build a back end for an e-commerce site by modifying starter code. I am configuring a working Express.js API to use Sequelize to interact with a MySQL database.
 - This project was build because nternet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit me as a full-stack web developer.
 

 ## Installation 

  ```
    npm i
    console.table
    dotenv
    express
    mysql2
    sequelize 
  ```

## Usage
Once all the packages have been onstalled, run the following commend in the termianl:
```
npm run seed
npm start
```

## Link To Recording and GitHub Repo 

https://drive.google.com/file/d/1yvTl8uphPshdq6NWUrHYtcPIYCvrPKM-/view 

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

In Insomnia, the user tests “GET All Categories"

![In Insomnia, the user tests “GET Categories”.](./images/category.jpg)
In Insomnia, the user tests  “GET All Products"

![In Insomnia, the user tests  “GET All Products.”](./images/products.jpg)

In Insomnia, the user tests “GET all Tags"


![In Insomnia, the user tests “GET tags.”](./images/tags.jpg)



---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.