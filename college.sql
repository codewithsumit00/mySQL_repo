

create database instagram;

USE instagram;
CREATE table USER (
ID int UNIQUE,
AGE INT,
NAME varchar (30) NOT NULL,
EMAIL varchar (50) unique,
followers INT,
following INT,
CONSTRAINT age_check CHECK (age >=13)
);

INSERT INTO user
(id , age , name , email , followers , following)
value
(1, 21, "adom", "adom@234gmail.com", 234, 123),
(2, 15, "sam", "sam@345gmail.com", 355,56),
(3, 33, "anjali", "anjali@gmail.com", 66,466),
(4, 30, "nikita", "priya@gmail.com", 66,466),
(5, 23, "sonam", "sonam@gmail.com", 266,466);


INSERT INTO INSTATABLE 
(ID , AGE , NAME ,  EMAIL, FOLLOWING)
VALUES
(6,22,"BHASKER", "ABHAKER@344GMAIL.COM",444);
 --  SELECT * FROM USER  

-- SELECT name , age, followers FROM USER       
-- WHERE age > 15 AND followers >=200      -- WHERE keyword use for specific condition apply karni ho 

-- WHERE age > 15 OR followers >=200;
-- and operator mai jab dono condition true hogi tabhi output milega ,and (and operator mai koi bhi 1 condition true hai tb bhi output dedega 

-- between operator use for jab list mai se koi renge ke bech ka data chahiye ho 
SELECT name , age, followers FROM USER  
where age BETWEEN 5 and 34;



-- sorting our data by using the ORDER clause  
-- to sort in ascending to use (ASC)
-- TO sort in decending to use (DESC)
SELECT NAME  , AGE, FOLLOWERS 
FROM USER
ORDER BY followers ASC;

SELECT NAME  , AGE, FOLLOWERS 
FROM USER
ORDER BY followers DESC;


-- aggregation function use for a take a set of value and give the single output 
SELECT min(following)
FROM USER; 

SELECT max(following)
FROM USER; 


select age, max(followers)
from user 
group by age
HAVING max(followers) > 200
order by age DESC;


-- WHEN UPDATE DATA FROM TABLE 
 update USER 
 SET followers = 600
 where age = 21;
 
set SQL_SAFE_UPDATES = 0;
 SELECT * FROM user;

-- DELETE DATA FROM TABLE 
DELETE FROM USER
WHERE AGE = 33;
SELECT * FROM USER;

-- USE ALTER USED FOR CHANGE THE COLUMN DESIGN (CHANGE SCHEMA DESIGN)
-- MULTIPLE METHOD EXISTING IN THIS FUNCTION 
 
-- ADD COLUMN 
ALTER table user
ADD column city VARCHAR(50) DEFAULT "DELHI";
 select * FROM USER;

-- DROP COLUMN (USE FOR DELETE COLUMN)
ALTER table user
DROP column city;

 select * FROM USER;

-- RENAME USED TO CHENGE THE TABLE NAME 
ALTER table USER
RENAME TO instaTable;
 select * FROM instatable;


-- change column 
alter table instatable
change column FOLLOWERS SUB INT DEFAULT 0; 
select * FROM INSTATABLE;


-- MODIFY DATA  FROM COLUMN 

ALTER TABLE INSTATABLE
modify SUB INT default 5;
select * FROM INSTATABLE;


CREATE table post (
ID INT PRIMARY KEY ,
content varchar(100),
user_id INT,
foreign key (user_id) REFERENCES user(id)
);

INSERT INTO POST
(ID, CONTENT , USER_ID )
VALUES 
(1 , "this is alice first post",1),
(2 ,"hello everyone!", 2),
(3 ,"today i learning SQL!", 2);

SELECT * from post;
 
 
 
 
 
 
 
 
 
 
 
 
 
create database college;
use college;
 create table teacher(
 id int,
 name varchar (30),
 subject varchar(50),
 salary int
 );
 
 insert into Teacher
 (id , name, subject, salary)
values
(23, "adom", "hindi", 50000),
(47 , "elish", "math", 65000),
(18 , "sark", "english" , 45000),
(9 , "divya", "physich", 75000); 
select * from teacher;
 
 select salary , name from teacher
 where salary >55000;


-- 	RENAME THE NAME OF COLUMN USE THIS 
alter table teacher
rename column salary to ctc;
select * from teacher 

-- when updata data from table 

UPDATE teacher
SET ctc = ctc + ctc * 0.25;