// let message:string="Hello";
// console.log(message);
// // message=0//error

// // primitive types
// let booleanVar:boolean=true;
// let numberVar:number=42;
// let symbolVar:symbol=Symbol("Unique");
// let nullvar:null=null;
// let undefinedVar:undefined=undefined;


// let anyVar: any="Could be anything";
// anyVar=anyVar+100;  //no error


// let unknownVar:unknown="Could be anything too";
// // unknownVar =unkbnnownVar+100  //error
// // unknown is type assertion



// let score:number[]=[12,23,43];
// console.log(score);
// let tupleVar:[string,number]=["Alice", 30];
// console.log(tupleVar);
// // tupleVar=[30,"Alice"]  //error



// // Unionn
// let id:string | number;
// id="Hello"
// console.log(id)
// id=123;
// console.log(id);
// // id=true  




// // funtion
// function add(num1: number, num2:number):string{
//     let sum:number=num1+num2;
//     return `Sum is ${sum}`;

// }

// let result :string=add(10,12);
// console.log(result);

// let greet =(name:string="Guest"):void=>{
//     console.log(`Hello, ${name}`)
// }
// greet();   //name is optional is default value






// // Objective Defination
// // 1. Object Literal
// let person:{name:string; age:number}={
//     name:"Nischal chor",
//     age:24,
//     //isActive :true//error
// }
// console.log(person,person.name)





// // Interface
// interface Product{
//     id:number;
//     name:string;
//     price:number;
//     description?:string;
// }


// const laptop:Product={
//     id:1,
//     name:"Laptop",
//     price:1500
// }
// console.log(laptop)



// type Student={
//     id:number;
//     name:string;
//     grade:string;
//     product?: Product
// }
// const student1:Student={
//     id:101,
//     name:"Bubbdy",
//     grade:"A",
//     product:laptop
// };

// console.log(student1)




// // Generics
// function identity <T>(arg:T):T{
//     return arg;
// }
// // Data type injwcted at call time
// let output1:string=identity<string>("myString");
// console.log(output1);
// let output2:number=identity<number>(12);
// console.log(output2);







// // enum
// // named constant
// enum Role{
//     Admin,  //Admi =0
//     User,
//     Gues
// }

// let userRole: Role =Role.Admin;
// console.log(userRole);
// console.log(userRole==Role.Admin)  //constat check

// let userRoleName:String="admin";
// console.log(userRoleName=="Admin")   //case sensetive check
// // Generic UseCase
// interface User{
//     id:number;
//     name:string;
//     role:Role;
// }
// let optUser:Partial<User>={
//     name:"Dave"
// }
// // evry attribute us optional
// console.log(optUser);
// let readonlyUser:Readonly<User>={
//     id:1,
//     name:"Eve",
//     role:Role.User
// };
// // readonlyUser.is=2//error
// console.log(readonlyUser)





// // ------------------Task-----------

// enum carType{
//     Sedan,  
//     SUV,
//     Truck,
//     Coupe
// }

// type carModel ={
//     name:string,
//     descrption:string;
// }
// interface Car{
//     make:string | number,
//     model:carModel,
//     year:number
//     type:carType,
//     isElectric?:boolean | number |string
// }

// let optUser:Partial<Car>={
//     name:"Dave"
// }
// // evry attribute us optional
// console.log(optUser);
// let readonlyUser:Readonly<Car>={
//     id:1,
//     name:"Eve",
//     role:Role.User
// };
// // readonlyUser.is=2//error
// console.log(readonlyUser)

