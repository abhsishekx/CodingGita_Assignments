##Part a — 4 Questions

Q1

let name = "Riya";
let age = 20;
let city = "Ahmedabad";

console.log(name);
console.log(age);
console.log(city);

Q2
let score = 50;
score = 80;
console.log(score);   

Q3

const PI = 3.14;
console.log(PI);     


Q4

var num1;
let num2;

console.log(num1);    // undefined
console.log(num2);    // undefined

num1 = 10;
num2 = 20;

console.log(num1);    
console.log(num2);    

## part b--4question

Q5

const studentName = "Aman";     
let marks = 75;                
const schoolName = "Sunrise School";   

marks = 90;

console.log(studentName);   
console.log(marks);         
console.log(schoolName);    

Q6

if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
}

console.log(a);  
try { console.log(b); } catch (e) { console.log(e.message); } 
try { console.log(c); } catch (e) { console.log(e.message); } 


Q7

var: allowed
var user = "Amit";
var user = "Rahul";
console.log(user);   

 let: NOT allowed. Uncommenting the lines below gives
 SyntaxError: Identifier 'user2' has already been declared
 let user2 = "Amit";
 let user2 = "Rahul";

Q8

var a = 1;
let b = 2;
const c = 3;

a = 10;                
b = 20;                 

try {
    c = 30;             
} catch (e) {
    console.log(e.message); 
}

console.log(a, b, c);   


Part c — 2 Questions

Q9

var x = 10;
if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}
console.log(x);   
console.log(y);   
console.log(z);   


Q10


const name = "Riya";        

let age = 20;
age = 25;                   

let country;                
if (true) {
    var city = "Delhi";     
    country = "India";      
}

console.log(country);       
console.log(city);          

let score = 50;           
score = 80;
console.log(score);  


## Part d — Hoisting

#Q11


console.log(a);  
console.log(b);  
console.log(c); 

var a = 10;
let b = 20;
const c = 30;

#output 

#undefined //var is hoisted to the top of its scope and automatically initialized with undefined. So a exists but has no value yet
#refernce error//let and const are also hoisted, but they are not initialized.
#never runs//let and const are also hoisted, but they are not initialized.


Q12

var x = "Hello";
let y = "World";
const z = "!";

console.log(x);
console.log(y);
console.log(z);

console.log(x + " " + y + z);

#output
#Hello
#World
#!
#Hello World


## Part e — Basic Identification 

#Q1--> classify the types

let whole = 42;
let decimal = 3.14;
let text = "JavaScript";
let isTrue = true;

console.log(whole, typeof whole);      
console.log(decimal, typeof decimal);   
console.log(text, typeof text);       
console.log(isTrue, typeof isTrue); 

#output
#42 "number"
#3.14 "number"
#JavaScript "string"
#true "boolean"

#Q2--> Undefined vs Null

let a;
let b = null;

console.log(a, typeof a);    
console.log(b, typeof b);   

#output
#undefined "undefined"
#null "object"


// // B] Assignment Operators


// // 1. SIMPLE ASSIGNMENT (=)
 
// Question-1

// let studentName = "Priya";
// let marks = 92;

// console.log(studentName, marks);


// Question-2

// let score = 0;

// console.log(score);


// Question-3

// let a = b = c = 50;

// console.log(a, b, c);


// Question-4

// let x;
// x = 100;
// console.log(x);

// // Output:
// // 100


// Question-5

// let p = 15;
// let q = p;
// q = 30;
// console.log(p, q);

// // Output:
// // 15 30


// 2. ADD AND ASSIGN (+=)

// Question-1

// let playerScore = 80;
// playerScore += 25;

// console.log(playerScore);

// // Output:
// // 105


// Question-2

// let balance = 1500;
// balance += 120;

// console.log(balance);

// // Output:
// // 1620


// Question-3

// let count = 10;
// count += 5;
// console.log(count);

// // Output:
// // 15


// Question-4

// let msg = "Good";
// msg += " Morning";
// console.log(msg);

// // Output:
// // Good Morning


// Question-5

// let n = 20;
// n += "5";

// console.log(n);

// // Output:
// // 205



// 3. SUBTRACT AND ASSIGN (-=)

// Question-1

// let health = 100;
// health -= 35;

// console.log(health);

// // Output:
// // 65


// Question-2

// let stock = 300;
// stock -= 45;

// console.log(stock);

// // Output:
// // 255


// Question-3

// let lives = 5;
// lives -= 2;
// console.log(lives);

// // Output:
// // 3


// Question-4

// let num = "40";
// num -= 15;
// console.log(num);

// // Output:
// // 25


// Question-5

// let x1 = "abc";
// x1 -= 5;

// console.log(x1);

// // Output:
// // NaN



// 4. MULTIPLY AND ASSIGN (*=)

// Question-1

// let price = 500;
// price *= 0.18;

// console.log(price);

// // Output:
// // 590


// Question-2

// let quantity = 8;
// quantity *= 3;

// console.log(quantity);

// // Output:
// // 24


// Question-3

// let amount = 200;
// amount *= 1.1;
// console.log(amount);

// // Output:
// // 220


// Question-4

// let val = "7";
// val *= 3;
// console.log(val);

// // Output:
// // 21


// Question-5

// let y = "hello";
// y *= 2;

// console.log(y);

// // Output:
// // NaN



// 5. DIVIDE AND ASSIGN (/=)

// Question-1

// let chocolates = 180;
// chocolates /= 6;

// console.log(chocolates);

// // Output:
// // 30


// Question-2

// let distance = 300;
// distance /= 5;

// console.log(distance);

// // Output:
// // 60


// Question-3

// let total = 400;
// total /= 8;
// console.log(total);

// // Output:
// // 50


// Question-4

// let num2 = "100";
// num2 /= 4;
// console.log(num2);

// // Output:
// // 25


// Question-5

// let z = 50;
// z /= 0;

// console.log(z);

// // Output:
// // Infinity



// 6. MODULUS AND ASSIGN (%=)

// Question-1

// let number = 47;
// number %= 6;

// console.log(number);

// // Output:
// // 5


// Question-2

// let counter = 23;
// counter %= 12;

// console.log(counter);

// // Output:
// // 11


// Question-3

// let num3 = 29;
// num3 %= 5;
// console.log(num3);

// // Output:
// // 4


// Question-4

// let x2 = "17";
// x2 %= 3;
// console.log(x2);

// // Output:
// // 2


// Question-5

// let m = 15;
// m %= 0;

// console.log(m);

// // Output:
// // NaN


// 7. EXPONENTIATION AND ASSIGN (**=)

// Question-1

// let side = 5;
// side **= 3;

// console.log(side);

// // Output:
// // 125


// Question-2

// let squareNumber = 4;
// squareNumber **= 2;

// console.log(squareNumber);

// // Output:
// // 16


// Question-3

// let base = 2;
// base **= 5;
// console.log(base);

// // Output:
// // 32


// Question-4

// let n1 = 4;
// n1 **= 0.5;
// console.log(n1);

// // Output:
// // 2


// Question-5

// let p1 = 2;
// p1 **= -1;

// console.log(p1);

// // Output:
// // 0.5
