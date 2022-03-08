# Node Js Application


Use npm install to install dependencies

Use Postman to execute APIs

There are two routes for question 1
1. index
2. home

Index Route Consist of two APIs login and signup
These two APIs are in POST method and one route in GET method.



POST : http://localhost:3000/sign-up

Sample document 1
{
    username:'1',
    name:'Jithin',
    city:'Adoor',
    phone:'9656449622',
    password:'123'
}

Sample document 2
{
    username:'2',
    name:'Hari',
    city:'Kollam',
    phone:'9565654778',
    password:'123'
}


POST : http://localhost:3000/login

{
    username:'1',
    password:'123'
}

GET : http://localhost:3000/logout

Home router has one route 

GET : http://localhost:3000/home

A JWT token will generate when enter correct username and password. The token stored in the session and if the token verified,
then moveto home page.
uses the same token to authenticate  GET : http://localhost:3000/home API

commit id : 78ea71080c163eacc4f81b6c77711a0585c5ac7d

To update usert type 
http://localhost:3000/update-usertype


{
    username:'1',
    usertype:'Admin'
}
{
    username:'2',
    usertype:'Guest'
}


Created 2 routes
1. Admin 
2. User

Admin has facility to upload photos,
User has facility to view uploaded photo we get the name of photos

to upload photos

POST http://localhost:3000/admin/upload-photo


To view uploaded photos by user

GET http://localhost:3000/user





