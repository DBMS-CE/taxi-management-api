# taxi-management-api

An api for taxi management.

Doc is hosted here: https://github.com/DBMS-CE/taxi-management-api/blob/master/taximanagement.docx

## Description

This is a project based on taxi management. It consists of seven tables named “Consumer”, “Driver”, “Expense”, “Order”, “Owner”, “Taxi” and “Transaction”. Each table consists of attributes that describe it. The main aim of Taxi Management project is to rent taxi and get payments from respective clients. We aim to demonstrate the use of create, read, update and delete MySQL operations through this project. The project starts by adding a taxi and by adding details of driver using the taxi added. The owner provides taxi to the drivers and ads their expenses on daily basis. Booking scene is where a customer can book a taxi to get of the desired location.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
Cloning a repository using the command line

    On GitHub, navigate to the main page of the repository.

    Note: If the repository is empty, you can manually copy the repository page's URL from your browser and skip to step four.

    Under the repository name, click Clone or download.
    Clone or download button

    To clone the repository using HTTPS, under "Clone with HTTPS", click 

. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click

    .
    Clone URL button

    Open Terminal.

    Change the current working directory to the location where you want the cloned directory to be made.

    Type git clone, and then paste the URL you copied in Step 2.

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

    Press Enter. Your local clone will be created.

    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    > Cloning into `Spoon-Knife`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.

Cloning a repository to GitHub Desktop

    On GitHub, navigate to the main page of the repository.
    Under your repository name, click 

to clone your repository in Desktop. Follow the prompts in GitHub Desktop to complete the clone. For more information, see "Cloning a repository from GitHub to GitHub Desktop."


### Prerequisites

As long as you have a pc, with node, npm running and mySql you are good to go!

### Installing

A step by step series of examples that tell you how to get a development env running

```
npm install
```
add your own credentials to existing config.env file,

return to main directory, run

```
npm start
```
In broswer open http://localhost:3000/graphql url for testing.

## Built With

* [mysql](https://dev.mysql.com/doc/) - Database
* [Node.js](https://nodejs.org/en/docs/) - Backend used
* [graphQL](https://graphql.org/learn/) - query language for API
* [Express](https://expressjs.com/en/4x/api.html) - Web application framework used
* [git](https://guides.github.com/) - Used for managing workflow
* [npm](https://docs.npmjs.com/) - Package manager

## Acknowledgments

* Hat tip to all who has contributed here
* And inspired 
