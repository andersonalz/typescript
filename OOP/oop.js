// const circle = {
//     radius: 5 ,
//     draw : function () {
//         console.log('draw');
//     }
// }

// const a = new circle

// function createCircle (radius) {
//     return {
//         radius : radius , 
//         draw : function () {
//             console.log('draw');
//         }
//     }
// }

// const c1 = createCircle(5)

// function Circle (radius) {
//     console.log(this);
//     this.radius = radius,
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const c2 =new Circle(5)
// console.log(Circle.constructor)


// const Circle1 = new Function ('radius' , 'this.radius = radius , this.draw = function () {console.log(draw);}')
// const c2 = new Circle1(4)
// console.log(c2);

// Circle.prototype.name = function (name) {
//     console.log(`${name}`);
// }

// const c1 = new Circle(5)
// console.log(c1);
// c1.name('ali')

// function person (name , age) {
//     this.name = name;
//     this.age = age;
//     this.presentation = function () {
//         if (age < 0) {
//            return console.log("this age more than 0");
//         }
//         console.log(` i am ${name} and ${age} years old`);
//     }
// }

// const c1 = new person("ali", -3)
// c1.presentation()


// function person() {
//     let name = "";
//     let age = 0;

//     Object.defineProperty(this, 'name', {
//         get: function () {
//             return name
//         },
//         set: function (_name) {
//             if (typeof _name !== 'string' || _name === "")
//               return console.log("name invalid input");
            
//             name = _name
//             console.log(name);
//         }

//     })
//     Object.defineProperty(this, 'age', {
//         get: function () {
//             return age
//         },
//         set: function (_age) {
//             if(typeof _age !== 'number' || _age < 0){
//                 console.log("age invalid input");
//             }
//             age = _age
//         }
//     })


//     this.presentation = function () {
//         console.log(` i am ${name} and ${age} years old`);
//     }
// }

// const c1 = new person()
// c1.name = "ali"


// class Person {
//     constructor () {
//         console.log('person');
//     }
// }


// const person =[ 
//     new Person(),
//     new Person()
// ]

// class rectangle {
//     constructor (x, y) {
//           this.x = x
//           this.y = y
//           this.a = x*y 
//     }

//     getArea(){
//         console.log(this.x * this.y) 
//     }
// }

// const rectangle1 = new rectangle(2,3)
// // console.log(rectangle1.a)
// rectangle1.getArea()



class Person { 
    static numofperson = 0;
    constructor (name, age) {
        this.name = name,
        this.age = age
        Person.numofperson++;
    }
    getPerson () {
        return console.log(`i am ${this.name} and ${this.age} years old`);
    }

    static checkperson(p1 ,p2) {
        if (p1.age === p2.age) {
          console.log('two same person ');
        }
        // return process.exit()
    }
}

const p = new Person("ali" , 20);
const p1 = new Person("ali" , 20);
p.getPerson()
Person.checkperson(p,p1)

     