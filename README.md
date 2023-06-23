

#  Pokemon Adoption Web Application README.md File

 


# About Project

 This is a Project named  **Pokemon Adoption**. It is built using **React js** and the backend part is of **Node js, Mangoose, and Express** so It is a MERN Stack Project with proper **authentication of user**.

##  Set Up project

 **Clone it-** Clone the project in your system.
 ```terminal
 git clone https://github.com/codesatyam/Hyathi_task
```
## project structure

```terminal
backend  
frontend
.gitignore
LICENSE
README.md
```

# Usage (Run Full-Stack app on your machine)

  

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)

- [Node](https://nodejs.org/en/download/) ^10.0.0

- [npm](https://nodejs.org/en/download/package-manager/)

  

# Notice
You need frontend and backend runs concurrently in a different terminal session, in order to make them talk to each other

## Frontend-side usage(PORT: http://127.0.0.1:5173/)

```terminal

$ cd frontend   // go to frontend folder

$ npm i     // npm install packages

$ npm run dev  // to run frontend part

```
## Backend-side usage(PORT: 4000)

  

### Open another teminal 

  

  

```terminal

// in the root level

$ cd backend  // go to backend folder
$ npm i // npm install packages
$ node server.js  // to run backend

```

 ## API(collection of requests).
 **Register**
 POST
 http://localhost:4000/api/v1/users/signup

  {
    "name":"test8",
    "email":"test8@gmail.com",
    "password":"12345678",
     "Cpassword":"12345678"
  }
  
 **Login**
 POST
 http://localhost:4000/api/v1/users/login
 {
    "email":"test8@gmail.com",
    "password":"12345678"
 }

 **Logout**
 GET
 http://localhost:4000/api/v1/users/logout

 **Adopt Pokemon**
 POST
 http://localhost:4000/api/v1/pokemon/new
 {
    "id":4,
    "name":"pikavhu",
      "moves":86,
     "hp":97,
    "height":43,
    "weight":24,
    "attack":45,
    "defense":87
    
}

**All adopted Pokemons**
GET
http://localhost:4000/api/v1/pokemon/my

**Remove pokemon**
DELETE
http://localhost:4000/api/v1/pokemon/64912d5584ae957eae476145
http://localhost:4000/api/v1/pokemon/:id

**Update Pokemon or feed (only health as hp is implemented)**
PUT
http://localhost:4000/api/v1/pokemon/64912d5584ae957eae476145
{
   "hp"=150
}
 
 

 

## Features


 **Authentication:-** 
 Every user needs to create an account to Adopt, after creating an account, need to log in to adopt Pokemons.

**Register page** 
 Users need to have an account to play adopt.

**Login page** 
 Users need to login in account. 
 
**Adopt a Pokemon**
  Users can adopt a Pokemon from the available list.
  
**Remove Pokemon**
   Users can remove a Pokemon from their adopted list.
   
 **Attributes of Pokemons**
 Pokemon has different attributes like breed,id, name, age, health status, attack, defense etc.
   
**All adopted Pokemons**
   Users can see all Pokemon of their adopted pokemons.

**Feed Pokemon**
User can feed any adopted pokemon by clicking on feed (default 150  health feed) 
   
**Show More Details**
 Users can view more details about a specific Pokemon.

**User Details**
 Users can view their own details, including their adopted Pokemon.
 
**User Authentication** 
Users can sign up, sign in, and sign out to access the features.

  
 
# Screenshots of this project

  

User Home page

![User visit public and Home page](https://imgur.com/QkPrQUN.png)

  

User can sign in or sign up

![User can sign in or sign up](https://imgur.com/ijPttAy.png)

  

![All pokemons section](https://imgur.com/k0UmNMk.png)

  

After signing in, the user can go to the account route and request the token-protected API endpoint.

Users can access Adopted Pokemons and remove also

![Adopted pokemons](https://imgur.com/Q5tSGNg.png)

User can see details about individual pokemons

![Details of individual pokemos component](https://imgur.com/WPl7nUJ.png)

**Excellent Learning and work experience**
