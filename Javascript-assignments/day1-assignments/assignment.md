Section A: Short Answer Questions

Q1. JavaScript is a lightweight, high-level, interpreted programming language primarily used to make web pages interactive and dynamic.

Q2. JavaScript was created by Brendan Eich in 1995, while he was working at Netscape.

Q3. Its original name was Mocha, later renamed to LiveScript, and finally JavaScript.

Q4. No, JavaScript and Java are different languages. Major difference: Java is a statically-typed, compiled language mainly used for building standalone applications, while JavaScript is a dynamically-typed, interpreted language mainly used for web development.

Q5. A high-level language means it is closer to human language and abstracts away hardware/memory details (like memory management), making it easier to read, write, and understand compared to low-level languages like Assembly.

Q6. JavaScript is primarily an interpreted language — the code is executed line-by-line by a JavaScript engine at runtime, rather than being compiled into machine code beforehand. (Modern engines use JIT — Just-In-Time — compilation internally for speed, but conceptually it behaves as interpreted.)

Q7.

Google Chrome → V8
Mozilla Firefox → SpiderMonkey
Apple Safari → JavaScriptCore (Nitro)

Q8. Dynamic Typing means you don't need to declare a variable's data type in advance. A variable's type is determined automatically at runtime and can change if reassigned (e.g., a variable holding a number can later hold a string).

Q9.

A static website shows fixed content that doesn't change unless the code itself is edited (built with only HTML/CSS).
A dynamic website can change content based on user interaction, time, or data from a server/database (uses JavaScript, backend languages, databases).

Q10. The three pillars of Front-end Web Development:

HTML – provides the structure/content of a webpage.
CSS – controls the styling and layout (colors, fonts, spacing).
JavaScript – adds behavior and interactivity to the webpage.

Q11.

Frontend is the client-side part of a website — what users see and interact with directly in the browser.
Backend is the server-side part — handles logic, databases, and server communication, invisible to the user.

Q12. Node.js is a runtime environment that allows JavaScript to run outside the browser, typically on a server, enabling developers to build backend applications using JavaScript.

Q13. ECMAScript (ES) is the standardized specification that defines the rules and features of the JavaScript language. JavaScript is essentially an implementation of the ECMAScript standard — new JS features (like let, const, arrow functions) come from new ECMAScript versions (ES6, ES2020, etc.).


Section B: True or False


False — JavaScript is a dynamically typed language.
False — JavaScript can also run outside the browser (e.g., using Node.js).
False — HTML is responsible for the structure; JavaScript is responsible for behaviour.
True
False — JavaScript is case-sensitive.
False — let name and let Name are different variables (case-sensitive).
False — ECMAScript is a specification/standard, not a programming language itself.
False — React, Angular, and Vue.js are used for Frontend development.


Section C: Fill in the Blanks


Brendan Eich; 1995
HTML, CSS, JavaScript
Chrome → V8; Firefox → SpiderMonkey
Customer = Frontend/User; Waiter = API/Request Handler; Chef = Backend/Server
.js


Section D: Conceptual Questions

Q14. A static website displays the same fixed content to every visitor and doesn't change unless a developer manually edits the code — e.g., a simple portfolio or "About Us" page. A dynamic website generates or updates content based on user actions, input, or data from a database — e.g., Amazon (product listings, prices, recommendations change per user/session).

Q15. Two features of JavaScript useful for interactivity:

Event handling: JavaScript can detect and respond to user actions like clicks, key presses, or mouse movement.
DOM manipulation: JavaScript can dynamically change HTML content, styles, and structure without reloading the page.

Q16. Four areas where JavaScript is used beyond browsers:

Backend development → Node.js
Mobile app development → React Native
Desktop app development → Electron.js
Game development → Phaser.js

Q17.

Inline (<script> in HTML): JS code is written directly inside the HTML file.
External .js file: JS code is written in a separate file and linked using <script src="file.js">.

Two advantages of external JS files:

Reusability — the same JS file can be linked across multiple HTML pages.
Better organization/maintainability — keeps HTML (structure) and JS (behavior) separate, making code easier to read and debug.

Q18. In the restaurant analogy: the customer is like the frontend/user placing a request (ordering food); the waiter acts like the API, carrying the request to the kitchen and bringing back the response; the chef is the backend, actually preparing (processing) the order behind the scenes. The customer never enters the kitchen — similarly, users never directly see backend logic, only the final result.

Q19. Reasons a beginner should learn JavaScript:

It's the only language that runs natively in every web browser.
It's versatile — used in frontend, backend (Node.js), mobile apps, and even AI/ML.
It has a huge community and job market, making it easier to find resources and career opportunities.
It's relatively beginner-friendly with simple syntax and instant visual feedback in the browser.


Section E: Code-Based Questions

Q20.

number
string
boolean

Explanation: JavaScript is dynamically typed, so the typeof a variable is determined by the value currently assigned to it. Initially value holds a number (25) → "number". When reassigned to "JavaScript", it becomes a string → "string". When reassigned to false, it becomes a boolean → "boolean".

Q21.

html
<!DOCTYPE html>
<html>
<head>
  <title>Alert Example</title>
</head>
<body>
  <button onclick="showAlert()">Click Me</button>

  <script>
    function showAlert() {
      alert("Welcome to JavaScript!");
    }
  </script>
</body>
</html>

Q22.

html
<!DOCTYPE html>
<html>
<body>
  <button id="myBtn">Click Me</button>
  <p id="demo">This is a paragraph.</p>

  <script>
    document.getElementById("myBtn").addEventListener("click", function() {
      document.getElementById("demo").textContent = "Button was clicked!";
    });
  </script>
</body>
</html>
Section F: Practical / Application Based

Q23.

html
<!DOCTYPE html>
<html>
<head>
  <title>My First JavaScript Page</title>
</head>
<body>
  <h1>My First JavaScript Page</h1>
  <button id="clickBtn">Click Me</button>

  <script>
    document.getElementById("clickBtn").addEventListener("click", function() {
      alert("Hello, B.Tech Student!");
      document.body.style.backgroundColor = "lightblue";
      console.log("JavaScript is running successfully!");
    });
  </script>
</body>
</html>

This page shows a heading, a button, and on click: displays an alert, changes the background color to light blue, and logs a success message to the console.

Section G: Higher Order Thinking (Bonus)

Q24. JavaScript became popular and multipurpose mainly because it started as the only language browsers could run natively, giving it a massive built-in audience from the start. Over time, two major developments expanded its reach far beyond the browser:

Node.js allowed JavaScript to run on servers, meaning developers could use one language for both frontend and backend, reducing context-switching and enabling full-stack development with a single skill set. This also opened doors to building APIs, real-time applications, and command-line tools in JS.
ECMAScript updates (ES6 and beyond) continuously modernized the language — adding features like let/const, arrow functions, promises, async/await, and modules — making JavaScript more powerful, readable, and capable of handling complex applications.
