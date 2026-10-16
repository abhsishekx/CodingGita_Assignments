
// 02. INTRODUCTION TO VARIABLE & DATATYPE

//1. Personal Information


// let name = "Abhishek";
// let age = 20;
// let city = "jamshedpur";

// console.log(name);
// console.log(age);
// console.log(city);

// // Output:
// // Abhishek
// // 20
// // jamshedpur


// // 2. Change the Score


// let score = 50;

// score = 80;

// console.log(score);

// // Output:
// // 80


// // 3. Constant Value


// const PI = 3.14;

// console.log(PI);

// // Output:
// // 3.14


// // 4. Uninitialized Variables


// var num1;
// let num2;

// console.log(num1);
// console.log(num2);

// num1 = 10;
// num2 = 20;

// console.log(num1);
// console.log(num2);

// // Output:
// // undefined
// // undefined
// // 10
// // 20


// // 5. Choose the Correct Keyword

// const studentName = "Ayush";
// let marks = 75;
// const schoolName = "Oxford Public School";

// marks = 85;

// console.log(studentName);
// console.log(marks);
// console.log(schoolName);

// // Output:
// // Ayush
// // 85
// // Oxford Public School


// // 6. Understand Scope

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

// // console.log(b); // ReferenceError
// // console.log(c); // ReferenceError

// // Output:
// // 10
// // 20
// // 30
// // 10
// // b and c cannot be accessed outside the if block.


// // 7. Test Re-declaration


// var user = "Ayush";
// var user = "Rahul";

// console.log(user);

// // Output:
// // Rahul
// // var allows re-declaration.


// // The following code gives an error:
// //
// // let user = "Ayush";
// // let user = "Rahul";
// //
// // Output:
// // SyntaxError: Identifier 'user' has already been declared
// //
// // let does not allow re-declaration.


// // 8. Test Re-assignment

// var x = 10;
// let y = 20;
// const z = 30;

// x = 100;
// y = 200;

// // z = 300; // TypeError: Assignment to constant variable.

// console.log(x);
// console.log(y);
// console.log(z);

// // Output:
// // 100
// // 200
// // 30
// // var and let allow re-assignment.
// // const does not allow re-assignment.


// // 9. Predict and Explain


// var x = 10;

// if (true) {
//     var x = 20;
//     let y = 30;
//     const z = 40;
// }

// console.log(x);
// console.log(y);
// console.log(z);

// // Output:
// // 20
// // ReferenceError: y is not defined
// // ReferenceError: z is not defined

// // Explanation:
// // var is function-scoped, so the x declared inside the if block
// // refers to the same variable x and changes its value to 20.

// // let and const are block-scoped.
// // Therefore, y and z exist only inside the if block.
// // They cannot be accessed outside the block.


// // 10. Fix the Program
// // Fix the errors related to initialization, re-declaration,
// // re-assignment, and scope.

// const name = "Ayush";

// let age = 20;
// age = 25;

// if (true) {
//     var city = "Delhi";
//     let country = "India";

//     console.log(country);
// }

// console.log(city);

// const score = 50;
// let newScore = score;
// newScore = 80;

// console.log(name);
// console.log(age);
// console.log(newScore);

// // Output:
// // India
// // Delhi
// // Ayush
// // 25
// // 80

// // Explanation:
// // const variables must be initialized when declared,
// // so name is given a value immediately.

// // age is declared only once using let.
// // Its value is changed using re-assignment.

// // country is declared inside the if block,
// // so it must be accessed inside that block.

// // score is declared using const, so its value cannot be changed.

// // Part e — Basic Identification (4 Questions)


// // 1. Classify the Types

// let wholeNumber = 25;
// let decimalNumber = 12.5;
// let text = "Hello World";
// let isStudent = true;

// console.log(wholeNumber, typeof wholeNumber);
// console.log(decimalNumber, typeof decimalNumber);
// console.log(text, typeof text);
// console.log(isStudent, typeof isStudent);

// // Output:
// // 25 number
// // 12.5 number
// // Hello World string
// // true boolean


// // 2. Undefined vs Null


// let a;
// let b = null;

// console.log(a, typeof a);
// console.log(b, typeof b);

// // Output:
// // undefined undefined
// // null object

// // Explanation:
// // undefined means a variable has been declared but has not been assigned a value.
// // null means an empty or intentionally missing value has been assigned.
// // typeof null returns "object" because of a historical JavaScript behavior.


// // 3. Number Special Values


// let positiveInfinity = Infinity;
// let negativeInfinity = -Infinity;
// let notANumber = NaN;
// let scientificNumber = 2.5e3;
// let largeNumber = 1_000_000;

// console.log(positiveInfinity, typeof positiveInfinity);
// console.log(negativeInfinity, typeof negativeInfinity);
// console.log(notANumber, typeof notANumber);
// console.log(scientificNumber, typeof scientificNumber);
// console.log(largeNumber, typeof largeNumber);

// // Output:
// // Infinity number
// // -Infinity number
// // NaN number
// // 2500 number
// // 1000000 number



// // 4. String Styles


// let name = "Ayush";

// let singleQuote = 'Hello World';
// let doubleQuote = "Hello JavaScript";
// let templateString = `Hello ${name}`;

// console.log(singleQuote);
// console.log(doubleQuote);
// console.log(templateString);

// // Output:
// // Hello World
// // Hello JavaScript
// // Hello Ayush





// // Part f — Advanced Primitive Types (3 Questions)

// // 5. Symbol Uniqueness


// let symbol1 = Symbol("id");
// let symbol2 = Symbol("id");

// console.log(symbol1 === symbol2);

// let user = {};

// user[symbol1] = "First Value";
// user[symbol2] = "Second Value";

// console.log(user[symbol1]);
// console.log(user[symbol2]);

// // Output:
// // false
// // First Value
// // Second Value

// // Explanation:
// // Every Symbol creates a unique value.
// // Even if two Symbols have the same description,
// // they are not equal to each other.


// // 6. BigInt Precision


// let normalNumber = 9007199254740991;

// console.log(normalNumber + 1);
// console.log(normalNumber + 2);
// console.log(normalNumber + 3);

// let bigNumber = 9007199254740991n;

// console.log(bigNumber + 1n);
// console.log(bigNumber + 2n);
// console.log(bigNumber + 3n);

// // Output:
// // 9007199254740992
// // 9007199254740992
// // 9007199254740994
// // 9007199254740992n
// // 9007199254740993n
// // 9007199254740994n

// // Explanation:
// // Number can safely represent integers only up to 9007199254740991.
// // Beyond this limit, Number may lose integer precision.
// // BigInt can represent very large integers with exact precision.



// // 7. Choose the Correct Type




// let uniqueId = Symbol("id");

// let largeInteger = 9007199254740991n;

// let uninitialized;

// let emptyValue = null;

// // Output:
// // uniqueId -> Symbol
// // largeInteger -> BigInt
// // uninitialized -> undefined
// // emptyValue -> null




// // Part g — Prediction & Fixing (3 Questions)

// // 8. Predict the Output


// let a;
// let b = null;
// let c = 42;
// let d = "Hello";
// let e = true;
// let f = Symbol("key");
// let g = 123n;

// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);
// console.log(typeof e, e);
// console.log(typeof f, f);
// console.log(typeof g, g);

// // Output:
// // undefined undefined
// // object null
// // number 42
// // string Hello
// // boolean true
// // symbol Symbol(key)
// // bigint 123n

// // Explanation:
// // a is undefined because it has no assigned value.
// // b is null, but typeof null returns "object".
// // c is a number.
// // d is a string.
// // e is a boolean.
// // f is a Symbol.
// // g is a BigInt.


// // 9. Fix the Code


// let num = 10;
// let text = "Hello";
// let flag = true;
// let empty;
// let nothing = null;
// let unique = Symbol("id");
// let big = 9007199254740991n;

// console.log(num);
// console.log(text);
// console.log(flag);
// console.log(empty);
// console.log(nothing);
// console.log(unique);
// console.log(big);

// // Output:
// // 10
// // Hello
// // true
// // undefined
// // null
// // Symbol(id)
// // 9007199254740991n


// // 10. Primitive vs Non-Primitive


// // a) 
// // Primitive data types store a single simple value.
// // Non-Primitive data types can store collections of values
// // or more complex structures.

// // Example of Primitive:
// let age = 18;

// // Example of Non-Primitive:
// let student = {
//     name: "Ayush",
//     age: 18
// };


// // b)
// // They are called primitive because they represent basic,
// // single values and are not objects themselves.

// // Examples:
// let number = 10;
// let word = "Hello";
// let status = true;
// let value;
// let nothingValue = null;
// let id = Symbol("id");
// let bigValue = 100n;


// // c)
// // An Object is a non-primitive data type.
// // It can contain multiple values as properties.

// // Example:
// let person = {
//     name: "Ayush",
//     age: 18,
//     city: "Ranchi"
// };

// // Output:
// // person is an Object.
// // It can store multiple related values together.
// // A new variable newScore is used when a changeable value is required.



// // PART H - Non-Primitive Data Types Basic Creation & Usage



// // 1. Create an Object


// let student = {
//     name: "Riya",
//     age: 18,
//     isEnrolled: true
// };

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.isEnrolled);

// // Output:
// // { name: 'Riya', age: 18, isEnrolled: true }
// // Riya
// // 18
// // true



// // 2. Work with Arrays


// let scores = [85, 92, 78, 90];
// let mixedData = [25, "Hello", true, null];

// console.log(scores);
// console.log(mixedData);
// console.log(scores[0]);
// console.log(scores[3]);

// // Output:
// // [85, 92, 78, 90]
// // [25, 'Hello', true, null]
// // 85
// // 90



// // 3. Declare and Call a Function


// function calculateArea(length, width) {
//     return length * width;
// }

// console.log(calculateArea(10, 5));
// console.log(calculateArea(8, 4));

// // Output:
// // 50
// // 32



// // 4. Check Types with typeof

// let numberValue = 25;
// let stringValue = "Hello";
// let booleanValue = true;
// let nullValue = null;
// let objectValue = { name: "Riya" };
// let arrayValue = [10, 20, 30];
// let functionValue = function() {
//     return "Hello";
// };

// console.log(numberValue, typeof numberValue);
// console.log(stringValue, typeof stringValue);
// console.log(booleanValue, typeof booleanValue);
// console.log(nullValue, typeof nullValue);
// console.log(objectValue, typeof objectValue);
// console.log(arrayValue, typeof arrayValue);
// console.log(functionValue, typeof functionValue);

// // Output:
// // 25 number
// // Hello string
// // true boolean
// // null object
// // { name: 'Riya' } object
// // [10, 20, 30] object
// // [Function: functionValue] function

// // Observation:
// // typeof null returns "object" because of a historical JavaScript behavior.
// // typeof an array also returns "object".




// // PART I - Naming Rules & Best Practices



// // 5. Valid vs Invalid Variable Names


// // Valid:
// // userName
// // _privateData
// // $price
// // totalCount

// // Invalid:
// // 2ndPlace
// // Reason: A variable name cannot start with a number.

// // my-age
// // Reason: Hyphen (-) is not allowed in variable names.

// // function
// // Reason: function is a reserved JavaScript keyword.

// // const
// // Reason: const is a reserved JavaScript keyword.

// // Correct examples:

// let userName;
// let _privateData;
// let $price;
// let totalCount;



// // 6. Apply Best Practices


// const length = 10;
// const width = 5;
// const area = length * width;
// const MAX_VALUE = 100;

// console.log(length);
// console.log(width);
// console.log(area);
// console.log(MAX_VALUE);

// // Output:
// // 10
// // 5
// // 50
// // 100



// // 7. Declaration & Assignment

// let studentAge;

// studentAge = 18;

// let studentName = "Ayush";

// const country = "India";

// console.log(studentAge);
// console.log(studentName);
// console.log(country);

// // Output:
// // 18
// // Ayush
// // India




// // PART J - Prediction & Fixing



// // 8. Predict the Output


// let person = {
//     name: "Amit",
//     age: 22
// };

// let colors = ["red", "green", "blue"];

// function sayHi() {
//     return "Hi!";
// }

// let empty = null;

// console.log(typeof person);
// console.log(typeof colors);
// console.log(typeof sayHi);
// console.log(typeof empty);
// console.log(person.name);
// console.log(colors[1]);
// console.log(sayHi());

// // Output:
// // object
// // object
// // function
// // object
// // Amit
// // green
// // Hi!

// // Explanation:
// // Objects have the typeof result "object".
// // Arrays also have the typeof result "object".
// // Functions have the typeof result "function".
// // typeof null returns "object" because of a historical JavaScript behavior.



// // 9. Fix the Program



// let student1 = {
//     name: "Neha",
//     age: 19
// };


// let scores2 = [90, 85, 88];

// function greet(name) {
//     return "Hello " + name;
// }


// let maxScore = 100;
// maxScore = 95;

// console.log(student1.name);
// console.log(scores2[0]);
// console.log(greet("Neha"));
// console.log(maxScore);

// // Output:
// // Neha
// // 90
// // Hello Neha
// // 95



// // 10. Concept Questions
// // a)
// // Object example:
// let personData = {
//     name: "Ayush",
//     age: 18
// };


// let subjectMarks = [80, 75, 90];



// // b)

// // Answer:
// // typeof null returns "object" because of a historical behavior
// // in JavaScript.
// // However, null is not actually an object.
// // It represents an intentional empty or missing value.



// // c)

// // Answer:
// // Keeping the same type of data in an array makes the code easier
// // to understand, maintain, and process.
// // It also makes operations on the array more predictable.

// let marks = [80, 85, 90, 95];



// // d)

// // Answer:
// // Use const when the variable should not be re-assigned.
// // Use let when the variable needs to be re-assigned.


// const collegeName = "ABC College";


// let marksObtained = 80;
// marksObtained = 90;

// // Output:
// // collegeName = ABC College
// // marksObtained = 90

