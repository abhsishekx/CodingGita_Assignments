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


console.log(a);   // undefined
console.log(b);   // ReferenceError: Cannot access 'b' before initialization
console.log(c);   // (never reached)

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

console.log(whole, typeof whole);       // 42 "number"
console.log(decimal, typeof decimal);   // 3.14 "number"
console.log(text, typeof text);         // JavaScript "string"
console.log(isTrue, typeof isTrue);     // true "boolean"

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


#Q3--> Number Special Values

let posInf = Infinity;
let negInf = -Infinity;
let notNum = NaN;
let sci = 2.5e3;
let readable = 1_000_000;

console.log(posInf, typeof posInf);       // Infinity "number"
console.log(negInf, typeof negInf);       // -Infinity "number"
console.log(notNum, typeof notNum);       // NaN "number"
console.log(sci, typeof sci);             // 2500 "number"
console.log(readable, typeof readable);   // 1000000 "number"

