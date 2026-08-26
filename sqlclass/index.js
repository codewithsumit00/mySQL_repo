const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
require("dotenv").config();

// Connect Node.js with MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sqlclass',
    password: process.env.DB_PASSWORD
});


let getRandomUser = () => {

    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];

};

let q = "INSERT INTO user (id , username, email, password) VALUES ?";

let data = [];
for (let i=1; i<=50; i++){
  data.push(getRandomUser()); //fake 100 users generate 
  
}

try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
        // console.log("100 users inserted successfully");
    });
} catch (err) {
    console.log(err);
}

connection.end();












// Test database connection
// connection.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:");
//         console.log(err);
//         return;
//     }

//     console.log("MySQL database connected successfully!");

//     connection.query("SHOW TABLES", (err, result) => {
//         if (err) {
//             console.log("Query error:");
//             console.log(err);
//             return;
//         }

//         console.log("Tables in sqlclass:");
//         console.log(result);

//         connection.end();
//     });
// });

// insert data 
// let q = "INSERT INTO user (id , username, email, password) VALUES ?";
// let users=[
//   ["1433", "shyamkushwah", "shayam chaohan@gmail.com", "23ssw33"],
//   ["234","wanda", "saxo@gmail.com","243fkmc"],
//   ["2342","thor", "sa@gmail.com","24353fkmc"],
// ];

//   try{
//   connection.query(q, [users],(err, result)=>{
//     if(err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
//   });
// }catch (err){
//   console.log (err);
// }

// connection.end();


// temp  table use  in database for mysql 
 // temp table use in database for mysql



// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];

// for (let i = 1; i <= 100; i++) {

//     data.push(getRandomUser ());
//   }




// try {

//     connection.query(q, [data], (err, result) => {

//         if (err) throw err; 
          
//             console.log(result);
          
//         });
//       } catch (err){
//         console.log(err);
//       }     
//   connection.end();









// this code is my code 


// const { faker } = require('@faker-js/faker');
// const mysql = require ('mysql2');
// require("dotenv").config();

// // connect the file for database (data base ko coonect karne ke liye ye function use kiye jate hai )



// const  connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'sqlclass',
//     password: process.env.DB_PASSWORD 
// });

// // now data base ko use karne ke liye ya kuch change karne k liye 

// try {
//   connection.query ("show tables", (err , result ) =>{
//     if (err) throw err ;
//     console.log (result );
//   });
// } catch (err){
//   console.log(err);
// }

// connection.end ();





















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