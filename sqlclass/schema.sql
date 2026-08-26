CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
); 

INSERT into user
(id , username , email ,password )
values 
(12, "sumit", "gautam2327@gmail.com",234485);

CREATE TABLE if NOT EXISTS temp(
    id int PRIMARY KEY,
    username VARCHAR(30),
    email VARCHAR(69)
);