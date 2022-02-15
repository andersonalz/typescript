"use strict";
// create app.ts and run whit tsc after run compiled to js after that creat js file run js and this work repeated (compile and run )
// TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. 
// The goal of TypeScript is to be a static typechecker for JavaScript programs
// in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked)
console.log("hello world");
// let b;
// if variable don't have any type that's type is any
let a = 12;
const sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(13, 12));
let fruit = ['apple', 'orange'];
let even = [1, 2, 3, 4];
let num = [1, 2, 3, 4, 5];
let tuple = [[1, 'ali'], [1, 'alii']];
let person1 = {
    name: 'ali',
};
let person2 = [{
        lname: 'ali',
    }];
let uid = [1, 'dfsdfgfdgsdfgfds'];
console.log(uid);
var pizza;
(function (pizza) {
    pizza[pizza["small"] = 5] = "small";
    pizza[pizza["medium"] = 7] = "medium";
    pizza[pizza["large"] = 10] = "large";
})(pizza || (pizza = {}));
console.log(pizza.small);
console.log(pizza['medium']);
console.log(pizza[10]);
const greeting = function (name) {
    console.log(`${name}`);
};
greeting('ali');
const generatError = function (msg) {
    return new Error(msg);
};
let user = 'ali ';
