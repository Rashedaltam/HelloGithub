 /// practicing variables

let xyz: string = "Rashed";
const myNumber: number =  5874;
let myMessage: string = "hello github";
let age:number = 48
//// write message that descripe ... etc 
 let isStudent: boolean = false;



 /// practicing conditions 
//  console.log("xyz", myNumber)

 if (age>= 25){
console.log("you are an adult");
 } else {
    console.log("you are a minor")
}
 
if (age === 26){
    console.log("you are 25 years old")
} else if (age === 24) {
console.log ("you are 25 years old")
}
else {
    console.log ("i dont know your age exactly")
}

let temp: number = 32;

if (temp > 30) {
  console.log("Its hot 🔥");
} else {
  console.log("Its cool");
}

 /// practicing functions

 function greet (personName: string):void{
    if (personName === "rashed"){
        console.log("hello"+ personName)
    };
 }

 function addNumbers (a:number, b:number):number{
    return a+b;
 }
 greet("rashed")
console.log(addNumbers(2,4))

 /// array and arrow functions 