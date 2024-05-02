// Different kinds of paradigms
// 1. Procedural programming
// 2. Functional programming
// 3. Object Oriented Programming Structure

// JS, Python -> multiparadigm languages

// (function iife(module, exports, __pathname, __dirname, require) {
//   // ...lines of code

//   function display() {
//     console.log("vasi");
//   }
//   display();
// })(module, exports, __dirname, require);

// // Immediately Invoked Function Expression

// display();

// var display = () => {
//   console.log("vasi");
// };

// class - a custom data structure -> properties/attributes and methods/behavior
// property -> variable inside a class
// method -> function inside a class
// object -> real time entity of a class (instance of class)

// class Human {
//   // properties
//   name = "dhoni";
//   color = "brown";
//   age = 42;
//   height = "6ft";

//   // behaviours / methods
//   eat() {
//     console.log("10 idlies");
//   }

//   sing() {
//     console.log("singing");
//   }
// }

// const vasi = new Human(); // object

// ways to create object
// 1. object literals -> {}, Object.create()
// 2. factory method
// 3. constructor method

// object literal
// const arti = {
//   name: "arti singh",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// // arti.display();

// const rahul = {
//   name: "rahul",
//   age: 20,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// // rahul.display();

// console.log(arti);
// console.log(rahul);

// factory -> when I have multiple object need to be created

// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const arti = createPerson("Arti singh", 10);
// const rahul = createPerson("Rahul", 20);

// console.log(arti);
// console.log(rahul);

// function demo(name, age) {
//   // console.log("this", this);
//   this.name = name;
//   this.age = age;
// }

// const vasanth = new demo("vasanth", 10);
// const sachin = new demo("sachin", 20);

// console.log("=".repeat(50));
// console.log(vasanth);
// console.log("=".repeat(50));
// console.log(sachin);
// console.log("=".repeat(50));

// constructor method

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.display = function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   };
// }

// class -> syntactic sugar of functions
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   display() {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// const arti = new Person("Arti singh", 10);
// const rahul = new Person("Rahul", 20);

// console.log(arti);
// console.log(rahul);
// arti.display();
// rahul.display();

// let nums = [1, 2, 3];
// let nums = new Array(1, 2, 3);

// console.log(nums);

// // prototype -> parent
// let nums = [1, 2, 3];
// // console.log(typeof nums, Array.isArray(nums));
// nums[100] = 100;

// nums["name"] = "vasanth";

// // nums[4] = 4;

// // nums.push(5);

// console.log(nums);

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// to handle async events -> also uses index
// for (let num of nums) {
//   console.log(num);
// }

// for (let data in nums) {
//   console.log(data);
// }

// const vasanth = {
//   name: "vasi",
//   age: 10,
// };

// const nums = [1, 2, 3];

// nums.__proto__ = vasanth;

// // nums.push(5);
// console.log(nums.age, nums.name);
