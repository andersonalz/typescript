
// create app.ts and run whit tsc after run compiled to js after that creat js file run js and this work repeated (compile and run )
// TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. 
// The goal of TypeScript is to be a static typechecker for JavaScript programs
// in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked)
console.log("hello world")

// let b;
// if variable don't have any type that's type is any
  
 
let a = 12

const sum = function (num1:number , num2:number )  : number{
    return num1 + num2
}
console.log( sum(13 , 12));

let fruit: string[] = ['apple' , 'orange']
let even: number[] = [1,2,3,4]
let num : Array<number> = [1,2,3,4,5]

let tuple: Array<[number , string]>  = [[1,'ali'] , [1,'alii']]
 
let person1 :object = {
    name  : 'ali',
} 

let person2 :Array<object> = [{
     lname : 'ali',
}]

let uid: Array<number | string> = [1 , 'dfsdfgfdgsdfgfds']
console.log(uid);


enum pizza {
    small = 5,
    medium = 7, 
    large = 10 
} 

console.log(pizza.small);
console.log(pizza['medium']);
console.log(pizza[10]);


const greeting = function (name :string):void{
    console.log(`${name}`)
}

 greeting('ali')

const generatError = function (msg:string):Error  {
     return new Error(msg)
}

type uid = number | string 
let username : uid =  "qwe"

type user = {
    username : string,
    id : uid
}

let person :user = {
    username : "ali",
    id : 1
} 
