// Increment / Decrement Operators (++ / --)

// PART A:

// 1. 

let count = 5;
count++;
console.log(count) // 6

// 2.

let lives = 3;
lives--;
console.log(lives); // 2


// 3.

let score = 10;
score++;
console.log(score); // 11


// 4.

let items = 8;
items--;
console.log(items); // 7


// 5.

let count = 0;
count++;
count++;
console.log(count); // 2

// PART B:

// 6.

let x = 5;
let y = x++;
console.log(x, y); // 6 5

// EXPLAINATIO:
// x++ is post-increment so, first the old value 5 is assigned to y then x is increased to 6.



// 7.

let a = 5;
let b = ++a;
console.log(a, b); // 6 6
// EXPLAINATIO:
// ++a is pre-increment so first a is increased to 6 then the new value 6 is assigned to b.




// 8.

let lives2 = 3;
let previousLives = lives2--;
console.log(lives2, previousLives); // 2 3
// EXPLAINATIO:
// lives2-- is post-decrement so first the old value 3 is assigned to previousLives then lives2 becomes 2.


// 9.

let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts); // 1 1
// EXPLAINATIO:
// ++attempts is pre-increment so first attempts becomes 1 then 1 is assigned to currentAttempts.



// 10.

let points = 100;
points++;
points--;
console.log(points); // 100
// EXPLAINATIO:
// ++ increases 100 to 101.
// -- decreases 101 back to 100.

// PART C:

// 11.

let x = 10;
let y = x++;
let z = ++x;

console.log(x, y, z); // 12 10 12


// 12.

let a = 5;
let b = a-- + ++a;

console.log(a, b); // 5 10


// 13.

let m = 7;
let n = --m + m++;

console.log(m, n); // 7 12


// 14.

let p = 3;
let q = p++ + ++p + p;  

console.log(p, q); // 5 13


// 15.

let val = 0;
val = val++ + ++val;

console.log(val); // 2


// 1. Simple Assignment (=)

// 1.

let nameofstd = priya;
let marksofstd = 92;

// 2.

let score = 0;

// 3. 

let a =b =c = 50;

// 4. 

let x;
x = 100;
console.log(x);

// Outpput:
// 100

// 5. 

let p = 15;
let q = p;
q = 30;
console.log(p, q);

// Output:
// 15 30

// 2. Add and Assign (+=)

// 1.

let score = 80;
score += 25;
console.log(score) // 105

// 2. 

let balance = 1500;
balance += 120;

console.log(balance) // 1620

// 3. 

let count = 10;
count += 5;
console.log(count); // Output: 15

// 4. 

let msg = "Good";
msg += " Morning";
console.log(msg);  // Output: Good Morning

// 5.

let n = 20; 
n += "5"; // Output will be "205"
// Explanation : String + number -> string concatenation (not addition)

// 3. Subtract and Assign (-=)

// 1.

let health = 100;
health-=35;
console.log(health)

// 2.

let stock = 300;
stock-=45;
console.log(stock)

// 3.

let lives = 5;
lives -= 2;
console.log(lives); //3

// 4.

let num = "40";
num -= 15;
console.log(num); //25

// 5.

let x = "abc";
x-=5;
console.log(x) //NaN

// 4. Multiply and Assign (*=)

// 1.

let itemPrice = 500;
itemPrice*=1.18;
console.log(itemPrice)

// 2.

let quantity = 8;
quantity*=3;
console.log(quantity)

// 3.

let amount = 200;
amount *= 1.1;
console.log(amount); //220

// 4.

let val = "7";
val *= 3;
console.log(val); //21

// 5.

let y = "hello";
y*=2;
console.log(y) //NaN


// 5. Divide and Assign (/=)

// 1.

let totalChocolates = 180;
totalChocolates/=6;
console.log(totalChocolates)

// 2.

let distance = 300;
distance/=5;
console.log(distance)

// 3.

let total = 400;
total /= 8;
console.log(total); //50

// 4.

let num = "100";
num /= 4;
console.log(num); // 25

// 5.

let z=50;
z/=0;
console.log(z) //Infinity

// 6. Modulus and Assign {%=)

// 1.

let number = 47;
number%=6
console.log(number)

// 2.

let counter = 23;
counter%=12;
console.log(counter)

// 3.

let num = 29;
num %= 5;
console.log(num); //4

// 4.

let x = "17";
x %= 3;
console.log(x); // 2

// 5.

let m = 15;
m %=0;
console.log(m) //NaN

// 7. Exponentiation and Assign (**=)

// 1.

let cubeSide=5;
cubeSide**=3;
console.log(cubeSide)

// 2.

let num = 4;
num**=2;
console.log(num)

// 3.

let base = 2;
base **= 5;
console.log(base); //32

// 4.

let n = 4;
n **= 0.5;
console.log(n); // 2

// 5.

let p = 2;
p**=-1;
console.log(p) // 0.5
// Explantion : a -ve exponent relLS you to take the reciprocal.


// [C] COMPARISON OPERATORS

// 1. Loose Equality (==)

// 1.

console.log("25"==25)

// 2.

console.log(0==false) //true

// 3.

console.log(10 == "10"); //true
console.log(null == undefined); //true

// 4.

console.log("" == 0); //true
console.log([] == false); true

// 5.

console.log(NaN==NaN) //false beacuse NaN is not equal to anything, including another NaN.

// 2. Loose Inequality (!=)

// 1.

console.log("18"!=18) //false

// .2.

console.log("1234"!=1234) //false

// 3.

console.log(5 != "5"); //false
console.log(0 != false); //false

// 4.

console.log(null != undefined); //false
console.log("" != 0); //false

console.log(NaN!=NaN) //true

// 3. Strict Equality (===)

// 1.
console.log("25"===25) //false because "25" is a string, while 25 is a number.

// 2.

console.log(0===false) //false
console.log(null===undefined) //false

// 3.

console.log(10 === "10"); //false
console.log(true === 1); //false

// 4.

console.log("" === 0); //false
console.log([] === false); //false

// 5.

//=== checks both value and data type.

// 4. Strict Inequality (!==)

// 1.

console.log("18"!==18) //true

// 2.

console.log(0!==false) //true
console.log(null!==undefined) //true

// 3.

console.log(5 !== "5"); //true
console.log(true !== 1); //true

// 4.

console.log("" !== 0); //true
console.log(NaN !== NaN); //true

// 5..

let input = "5";

if (input !== "0") {
    console.log("5. Input is not equal to string 0");
}


// Increment / Decrement Operators (++ / --)

// PART A:

// 1. 

let count = 5;
count++;
console.log(count) // 6

// 2.

let lives = 3;
lives--;
console.log(lives); // 2


// 3.

let score = 10;
score++;
console.log(score); // 11


// 4.

let items = 8;
items--;
console.log(items); // 7


// 5.

let count = 0;
count++;
count++;
console.log(count); // 2

// PART B:

// 6.

let x = 5;
let y = x++;
console.log(x, y); // 6 5

// EXPLAINATIO:
// x++ is post-increment so, first the old value 5 is assigned to y then x is increased to 6.



// 7.

let a = 5;
let b = ++a;
console.log(a, b); // 6 6
// EXPLAINATIO:
// ++a is pre-increment so first a is increased to 6 then the new value 6 is assigned to b.




// 8.

let lives2 = 3;
let previousLives = lives2--;
console.log(lives2, previousLives); // 2 3
// EXPLAINATIO:
// lives2-- is post-decrement so first the old value 3 is assigned to previousLives then lives2 becomes 2.


// 9.

let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts); // 1 1
// EXPLAINATIO:
// ++attempts is pre-increment so first attempts becomes 1 then 1 is assigned to currentAttempts.



// 10.

let points = 100;
points++;
points--;
console.log(points); // 100
// EXPLAINATIO:
// ++ increases 100 to 101.
// -- decreases 101 back to 100.

// PART C:

// 11.

let x = 10;
let y = x++;
let z = ++x;

console.log(x, y, z); // 12 10 12


// 12.

let a = 5;
let b = a-- + ++a;

console.log(a, b); // 5 10


// 13.

let m = 7;
let n = --m + m++;

console.log(m, n); // 7 12


// 14.

let p = 3;
let q = p++ + ++p + p;  

console.log(p, q); // 5 13


// 15.

let val = 0;
val = val++ + ++val;

console.log(val); // 2
