
// // C] COMPARISON OPERATORS

// // 1. LOOSE EQUALITY 


// // 1. 

// console.log("25" == 25);

// // Output:
// // true

// // Explanation:
// // == performs type conversion before comparison.
// // "25" is converted into the number 25.



// // 2. 

// console.log(0 == false);

// // Output:
// // true



// // 3. 

// console.log(10 == "10");
// console.log(null == undefined);

// // Output:
// // true
// // true

// // Explanation:
// // 10 and "10" become equal after type conversion.
// // null and undefined are loosely equal using ==.



// // 4. 

// console.log("" == 0);
// console.log([] == false);

// // Output:
// // true
// // true

// // Explanation:
// // The empty string "" is converted to 0.
// // An empty array [] is converted to an empty string,
// // which is then converted to 0.



// // 5. 

// console.log(NaN == NaN);

// // Output:
// // false

// // Explanation:
// // NaN represents an invalid or unknown numeric result.
// // NaN is not equal to itself.
// // Therefore, NaN == NaN returns false.



// // 2. LOOSE INEQUALITY !=



// // 1. 

// console.log("18" != 18);

// // Output:
// // false

// // Explanation:
// // == type conversion makes "18" and 18 equal.
// // Therefore, != returns false.



// // 2. 

// let storedPassword = "1234";
// let enteredPassword = 1234;

// console.log(storedPassword != enteredPassword);

// // Output:
// // false

// // Explanation:
// // The values become equal after type conversion.



// // 3. 

// console.log(5 != "5");
// console.log(0 != false);

// // Output:
// // false
// // false



// // 4. 

// console.log(null != undefined);
// console.log("" != 0);

// // Output:
// // false
// // false



// // 5. 

// console.log(NaN != NaN);

// // Output:
// // true

// // Explanation:
// // NaN is not equal to itself.
// // Therefore, the inequality comparison returns true.




// // 3. STRICT EQUALITY ===



// // 1. 

// console.log("25" === 25);

// // Output:
// // false

// // Explanation:
// // === compares both value and data type.
// // "25" is a string while 25 is a number.
// // Therefore, they are not strictly equal.



// // 2.

// console.log(0 === false);
// console.log(null === undefined);

// // Output:
// // false
// // false

// // Explanation:
// // 0 is a number and false is a boolean.
// // null and undefined are different data types.



// // 3. 

// console.log(10 === "10");
// console.log(true === 1);

// // Output:
// // false
// // false



// // 4. 

// console.log("" === 0);
// console.log([] === false);

// // Output:
// // false
// // false

// // Explanation:
// // Strict equality does not perform type conversion.
// // The values have different types.



// // 5. 

// // Explanation:
// // === is generally preferred because it checks both value and type.
// // It does not perform unexpected type conversion.
// // This makes the code more predictable and easier to understand.




// // 4. STRICT INEQUALITY !==



// // 1. 

// console.log("18" !== 18);

// // Output:
// // true

// // Explanation:
// // "18" is a string and 18 is a number.
// // Since their types are different, !== returns true.



// // 2. 

// console.log(0 !== false);
// console.log(null !== undefined);

// // Output:
// // true
// // true

// // Explanation:
// // 0 is a number and false is a boolean.
// // null and undefined are different types.



// // 3. 

// console.log(5 !== "5");
// console.log(true !== 1);

// // Output:
// // true
// // true



// // 4. 

// console.log("" !== 0);
// console.log(NaN !== NaN);

// // Output:
// // true
// // true

// // Explanation:
// // "" is a string while 0 is a number.
// // Therefore, they are strictly different.
// //
// // NaN is not equal to itself.
// // Therefore, NaN !== NaN returns true.



// PART C: RELATIONAL OPERATORS

// 5. GREATER THAN >


// 1. 

// let studentMarks = 78;
// let passingMarks = 40;

// console.log(studentMarks > passingMarks);

// Output:
// true

// 2.

// let todayTemperature = 35;
// let yesterdayTemperature = 28;

// console.log(todayTemperature > yesterdayTemperature);

// Output:
// true


// 3. 

// console.log(15 > 10);
// console.log(10 > 15);
// console.log(10 > 10);

// Output:
// true
// false
// false


// 4.

// console.log("20" > 15);
// console.log("5" > "10");
// console.log("abc" > 10);

// Output:
// true
// true
// false

// Explanation:
// "20" is converted to the number 20 when compared with 15.
// "5" and "10" are both strings, so they are compared lexicographically.
// "abc" cannot be converted into a valid number for this comparison,
// so the result is false.


// 5. 

// console.log(null > 0);
// console.log(undefined > 0);

// Output:
// false
// false

// Explanation:
// null is converted to 0, so 0 > 0 is false.
// undefined converts to NaN in numeric comparison.
// Comparisons involving NaN return false.


// 6. 

// let stock = 120;
// let requestedItems = 85;

// console.log(stock > requestedItems);

// Output:
// true


// 7. 

// console.log(true > false);
// console.log("10" > "2");
// console.log(NaN > 5);

// Output:
// true
// false
// false

// Explanation:
// true converts to 1 and false converts to 0.
// Therefore, 1 > 0 is true.
// "10" and "2" are strings, so their first characters are compared.
// Since "1" comes before "2", the result is false.
// NaN cannot be compared using relational operators,
// so NaN > 5 is false.




// 6. LESS THAN <



// 1.

// let boxCapacity = 50;
// let currentWeight = 42;

// console.log(currentWeight < boxCapacity);

// Output:
// true


// 2. 

// let age = 16;
// let minimumAge = 18;

// console.log(age < minimumAge);

// Output:
// true


// 3.

// console.log(8 < 12);
// console.log(20 < 10);
// console.log(7 < 7);

// Output:
// true
// false
// false


// 4. 

// console.log("8" < 10);
// console.log("20" < "3");
// console.log("hello" < 5);

// Output:
// true
// true
// false

// Explanation:
// "8" is converted to the number 8.
// "20" and "3" are strings, so they are compared lexicographically.
// The first character "2" comes before "3".
// "hello" cannot be converted to a valid number,
// so the comparison returns false.


// 5. 

// console.log(null < 0);
// console.log(undefined < 0);

// Output:
// false
// false

// Explanation:
// null converts to 0, so 0 < 0 is false.
// undefined converts to NaN in numeric comparison.
// Comparisons involving NaN return false.


// 6. 

// let tankCapacity = 500;
// let currentWater = 375;

// console.log(currentWater < tankCapacity);

// Output:
// true


// 7. 

// console.log(false < true);
// console.log("5" < "15");
// console.log(NaN < 10);

// Output:
// true
// false
// false

// Explanation:
// false converts to 0 and true converts to 1.
// Therefore, 0 < 1 is true.
// "5" and "15" are strings, so the first characters are compared.
// "5" comes after "1", so the result is false.
// NaN cannot be compared using relational operators,
// so NaN < 10 is false.




// 7. GREATER THAN OR EQUAL TO >=


// 1.

// let distinctionMarks = 75;
// let scoredMarks = 75;

// console.log(scoredMarks >= distinctionMarks);

// Output:
// true


// 2. 

// let ticketPrice = 300;
// let money = 300;

// console.log(money >= ticketPrice);

// Output:
// true


// 3.

// console.log(25 >= 25);
// console.log(30 >= 25);
// console.log(20 >= 25);

// Output:
// true
// true
// false


// 4. 

// console.log("25" >= 25);
// console.log("10" >= "2");
// console.log(null >= 0);

// Output:
// true
// false
// true

// Explanation:
// "25" converts to 25 when compared with a number.
// "10" and "2" are strings, so they are compared lexicographically.
// "1" comes before "2", so the result is false.
// null converts to 0, and 0 >= 0 is true.


// 5. 

// console.log(undefined >= 0);

// Output:
// false

// Explanation:
// undefined converts to NaN in numeric comparison.
// Comparisons involving NaN return false.


// 6. 

// let liftCapacity = 8;
// let peopleInside = 8;

// console.log(peopleInside >= liftCapacity);

// Output:
// true


// 7.

// console.log(true >= 1);
// console.log("" >= 0);
// console.log(NaN >= NaN);

// Output:
// true
// true
// false

// Explanation:
// true converts to 1, so 1 >= 1 is true.
// An empty string converts to 0, so 0 >= 0 is true.
// NaN cannot be compared with any value using relational operators,
// so NaN >= NaN is false.




// 8. LESS THAN OR EQUAL TO <=


// 1. 
// let speedLimit = 60;
// let vehicleSpeed = 60;

// console.log(vehicleSpeed <= speedLimit);

// Output:
// true


// 2. 

// let marksRequired = 40;
// let marksScored = 39;

// console.log(marksScored < marksRequired);

// Output:
// true

// Explanation:
// The student scored less than the required passing marks.


// 3. 

// console.log(15 <= 20);
// console.log(20 <= 15);
// console.log(15 <= 15);

// Output:
// true
// false
// true


// 4. 

// console.log("15" <= 20);
// console.log("30" <= "5");
// console.log(null <= 0);

// Output:
// true
// true
// true

// Explanation:
// "15" converts to 15 when compared with a number.
// "30" and "5" are strings, so they are compared lexicographically.
// "3" comes before "5", so the result is true.
// null converts to 0, and 0 <= 0 is true.


// 5. 

// console.log(undefined <= 0);

// Output:
// false

// Explanation:
// undefined converts to NaN in numeric comparison.
// Comparisons involving NaN return false.


// 6. 

// let bagCapacity = 10;
// let booksInside = 10;

// console.log(booksInside < bagCapacity);

// Output:
// false

// Explanation:
// The bag is already full.
// The condition checks whether the current number of books
// is less than the maximum capacity.


// 7. .

// console.log(false <= 0);
// console.log("" <= 0);
// console.log(NaN <= 5);

// Output:
// true
// true
// false

// Explanation:
// false converts to 0, so 0 <= 0 is true.
// An empty string converts to 0, so 0 <= 0 is true.
// NaN cannot be compared using relational operators,
// so NaN <= 5 is false.




// MIXED PRACTICE: >, <, >=, <=



// 1. 

// let votingAge = 18;
// let personAge = 18;

// console.log(personAge >= votingAge);

// Output:
// true




// let temperature = 32;

// console.log(temperature < 35);

// Output:
// true




// let score = 90;

// console.log(score > 85);

// Output:
// true


// 2. 

// console.log(10 > 5 && 5 < 10);
// console.log("10" >= 10);
// console.log(null <= undefined);
// console.log("5" < "10" && 5 > 2);

// Output:
// true
// true
// false
// false

// Explanation:
// 10 > 5 is true and 5 < 10 is true.
// true && true gives true.
//
// "10" converts to 10, so 10 >= 10 is true.
//
// null <= undefined returns false because undefined converts to NaN.
// Comparisons involving NaN return false.
//
// "5" < "10" is false because both are strings and "5" comes
// after "1" in lexicographical order.
// false && true gives false.


// 3.

// let productPrice = 499;
// let customerMoney = 500;

// console.log(customerMoney >= productPrice);
// console.log(productPrice < customerMoney);

// let change = customerMoney - productPrice;

// console.log(change);

//4.

//"10" > "2" is false because JavaScript compares strings character by character. "1" comes before "2".
//10 > 2 is true because JavaScript compares numbers mathematically.
