// //Global variable
// var a=10
// console.log(a)
// function f1(){console.log("Inside:"+a)}
// console.log(a)
// f1()

// //Local Variables
// function f2(){b=100;console.log("Inside: "+b)}
// f2()

// //Default values in function
// function f3(a=10,b=20,c){console.log(a,b,c)}
// f3(100,200,300);f3()

// //Key-Value Pair in function
// function f4(a,b){return console.log(a+b)}
// f4(a=1000,b=2000)

// //Inner-Function
// function f5(){console.log("f5|Function");f6()}
// function f6(){console.log("f6|Function")};f5()

// //Arguments
// var f=function f7(){
// console.log(arguments)
// console.log(arguments[0])    
// console.log(arguments[1])
// console.log(arguments.length)}
// f("Hello");f("World","is","Wonderful");

// //Pure Function
// function f8(){n=5;sq=n*n;console.log(sq)}
// n=10; f8()

// //Impure Function
// function f9(){sq=n*n;console.log(sq)}
// n=10;n=100;f9()

// //Function without arguments
// function f10(){
//     console.log("f10 function")
// }
// f10()

// //Function assigned to variables without arguments
// f11= function () {console.log("f11 function")}
// f11()
// console.log(typeof(f11))
// console.log(f11)

// //Arrow Function without arguments
// f12=() => {console.log("Arrow Function")}
// f12()
// console.log(typeof(f12))
// console.log(f12)

// //Function with arguments and template strings
// function f13(fname,lname){console.log("First Name is",fname,"Last Name is",lname);
// console.log("First Name is",{fname},"Last Name is",{lname})}
// f13("Adnan","Sohail")
// f14=function(fname,lname){console.log("First Name is",fname,"Last Name is",lname);
// console.log("First Name is",{fname},"Last Name is",{lname})}
// f14("Adnan","Sohail")

// //Arrow functions with arguments
// f15=(fname,lname) => {console.log("First Name is",fname,"Last Name is",lname);
// console.log("First Name is",{fname},"Last Name is",{lname})}
// f15("Adnan","Sohail")
// console.log(f15("Ad","So"))

//Higher Order Functions
//The Function that takes as arguments and returns a function
parent = function(){console.log("Outer Function");
return function(){console.log("Inner Function")}}
child=parent()
child()
console.log(typeof(child))
console.log(typeof(parent))
