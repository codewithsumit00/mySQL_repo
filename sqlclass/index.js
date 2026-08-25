const { faker } = require('@faker-js/faker');
const mysql = require ('mysql2');
require("dotenv").config();

// connect the file for database (data base ko coonect karne ke liye ye function use kiye jate hai )



const  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: process.env.DB_PASSWORD 
});

// now data base ko use karne ke liye ya kuch change karne k liye 

try {
  connection.query ("show tables", (err , result ) =>{
    if (err) throw err ;
    console.log (result );
  });
} catch (err){
  console.log(err);
}

connection.end ();





















// this code is create a rendom data or dummy data 

// let createRandomUser = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }; 

// console.log(createRandomUser());


// create a random data like userid ,username email, password ) check the how to work faker.js library 


// let randomdata = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
    
//   };
// }; 

// console.log (randomdata());