# App Info
This application is for the SDI-15 cohort z-prefix full stack crud project. 

# Getting started
-First you want to fork and clone the git hub repository. 
-Connect to Postgres SQL using docker. 
    -Install Docker
    -Create a directory that will house your database data
    -Start a Docker postgres container
    -Connect to that container
    -Login into psql using default user
    -From there you want to create a database names 'frisbees'
-Then, you want to CD into 'webpage' and 'api' and run 'npm install'
-In the api directory, run 'npm run reset' to seed the 'frisbees' database. 
-After that is done, run 'npm start' on both 'webpage' and 'api'
-The web application should be running. 

# Navigating the website
-As a vistor you are able to see the home page, where you can click on individual frisbees and take you to an individual page. 
-If you have an account, you are able to see the page, where you can add, delete, and update frisbees. 
-To log in the username is 'spaceCowboy' and the password is 'bang'. (if wrong info is entered, you will not be able to login) 
-After adding, deleting, and/or updating, you can see the changes on the home page. 
-Even as a vistor, you are able to see the items deleted, created, and updated in the home page. 
-When adding/deleting/updating as manager, it is then updated in the DB as well. 
-As a manager you are able to see the frisbees you added separate from you regular inventory. 
-Make sure to select and fill out everything in 'edit' page

# DO NOTS
-Hitting refresh logs the user out. All of his/her changes, will be saved in DB, but you will have to log back in. 

(Hopefully it all works)

