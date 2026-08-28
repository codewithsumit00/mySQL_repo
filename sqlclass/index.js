

const express = require("express");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let getUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let data = result;
      res.render("users.ejs", { data });
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username, password } = req.body;
  console.log(username);
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `UPDATE user SET username='${username}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("updated!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen("8080", () => {
  console.log("server running on port 8080");
});




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