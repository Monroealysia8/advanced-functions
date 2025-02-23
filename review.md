# Summarize the main points from each day of the week:

## Day 1: JavaScript Basics:

### Variables-
Storing the information you need. 
You can declare variables with let, const, and var. Use let when you want to redeclare a variable later on. Use const when you will NOT redeclare a variable. DONT use var. It causes errors and is deprecated. 

### Data Types- 
Data types specify what kind of value a variable can hold. Boolean, string, and null are some examples of data types. 

### Operators-
Special symbols or key words used to perform operations on variables and values. Operators are used for performing arithmatic, logical,relational, and assignment tasks in a program. 
Arithmatic Operators:
Addition +
Subtraction -
Multiplication *
Division /
Modulus % (remainder of devision)
Increment ++ 
(increases a value by 1)
Decrement --
(decreases a value by 1)

Assignment Operators:
Simple Assignment =
Add and assign +=
Subtract and assign -=
Multiply and assign *=
Divide and assign /=
Modulus and assign %=

Comparison Operators:
Equal to ==
Strictly equal to ===
Not equal !=
Strictly not equal to !==
Greater than >
Lesser than <
Greater than or equal to <=
Less than or equal to <=

Logical Operators
Logical AND &&
Logical OR ||
Logical NOT !

### Objects-
It stores data with key value pairs. The values can be other objects, arrays, or functions. The keys in the object are always strings or symbols. By grouping related data together, they help organize information and make code more readable and maintainable.

## Day 2: Advanced JavaScript Concepts:

### this. keyword-
 It is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

### JSON-
 It is commonly used for transmitting data in web applications (for example: sending some data from the server to the client, so it can be displayed on a web page, or vice versa).  API's typically use JSON to send and recieve data of the web. It configures files and stores configuration settings to make it easier to read and modify. It stores data in databases. It can be used to communicate between different systems written in different programing languages. Serialization of data: objects and data structures(lists, dictionaries, or arrays) are serialized in JSON format to be stored or transmitted and later deserialized back into thier original form. 

## Day 3: DOM Manipulation:

### getElementById-
A method used to select and return a single DOM element that has a specific id attribute. Use this to access elements by their unique Id. 

### querySelector-
A method used to select elements from the DOM in a webpage. It can be used to easily manipulate HTML elements on a page to change content, styling, or handling events. There is also a queryselectorall that selects all matching elements that are given the css selector that returns a nodelist.(not the same as an array) 

### preventDefault-
A method that is used to prevent the default action of an event from being triggered. It is used mostly in event handling to override the browsers default behavior for certain actions. Examples of where it is used: 
1.Form submissions-to prevent a form from submitting and refreshing the page.

2.Link(<a> tags)-to prevent navigation when a link is clicked. 

3.Keyboard events-to prevent a default keyboard action, like preventing the spacebar from scrolling the page. 

### JSON-
Using JSON in DOM manipulation refers to the practise of using JSON data to dynamically update, modify, or interact with elements in the DOM of a webpage. JSON is often used a format for exchanging data, and it can be parsed and put into the DOM  to manipulate page content, structure, and behavior based on that data. 

1.Retrieve or Define JSON Data: JSON can be obtained from external sources (APIs), or you can define it in your JavaScript.

2.JSON.parse() 
If the JSON is a string(from an API) use this to convert it into an JavaScript object.

3.Use the Data: Once you have the JSON data as an object, you can access its properties and use them to create or modify HTML elements within the DOM.

4.Update the DOM: With JavaScript, dynamically add, remove, or update elements in the HTML based on the parsed JSON data.


JSON.stringify() is a method in JavaScript that converts a JavaScript object or value into a JSON (JavaScript Object Notation) string. It is commonly used when you want to send data to a server, store data, or log it in a JSON-compatible format.

## Day 4: Promises and Async/Await:

### promises-
An object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a more structured way, avoiding trouble with call back and providing a cleaner approach to handling asynchronous logic. (Async meaning takes a long time.)
Three states: pending, fulfilled or rejected. 

### async/await-
Features that simplify working with asynchronous code. 
Async is a function that always returns a promise, and it allows you to use the await keyword within it. 
Await is an expression that can only be used inside an async function.  It waits for the PROMISE to resolve and RETURNS THE VALUE.

### fetch-
Is a method of the window interface that starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response if available. 

### setTimeout-
A method/ built in function that allows you to execute a function or code after a specifiec delay(in milliseconds). This is often used for deferring execution or creating delays between certain actions in your program. 
Delay: The time, in milliseconds (1 second = 1000 milliseconds)

## Day 5: Advanced Functions:

### constructor functions-
Special Types of functions used to create and initialize objects. They allow you to create multple instances of the same type of object without having to manually define each property and method for each object. It looks like a regular function, but it is named with an uppercase first letter and called with a "new" keyword. 

### factory functions-
A function that returns an object. These do not require the "new" keyword or uppercase letter. They are used to create multiple instances of similar objects  with varying properties. They encapsulate logic and create instances of objects without relying on "this." or prototype. 

### prototypes-
An object that is associated with every function and object, and it allows inheritance. 
-Every function in JavaScript has a prototype property. 
-When you create and object using a constructor function or a class, the object has acces to the constructor functions prototypes properties and methods. 
-Every object in JavaScript has a built-in property, which is called prototype. The prototype is an object itself, so the prototype will have its own prototype making whats called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. When you try to access a property of an object: if the property cant be found in the object itself, the prototype is searched for the property. If the property still cant be found, then the prototypes prototype is searched until undefined it returned. 

### inheritance-
Controls what happens when no value is specified for a property on an element.
CSS properties can be categorized in two types:
-inherited properties, which by default are set to the computed value of the parent element. 
-non-inherited properties, which by default are set to initial value of the property. 


