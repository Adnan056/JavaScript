//Object Literal
// var l1={
//     //properties
//     firstName:"Adnan",
//     lastName:"Sohail",
    
//     //function
//     display:function(){
//         console.log("Display Function")
//     }
// }
// console.log(l1)
// l1.display()

//Using 'this' keyword refers to the current object
// var l2={
//     firstName: "Adnan",
//     lastName: "Sohail",
//     display:function(){
//         console.log("Direct this:"+this)
//         console.log("Calling properties using this:"+this.firstName+" "+this.lastName)
//     }
// }
// console.log(l2)
// l2.display()
// console.log(l2.firstName+" "+l2.lastName)

//Calling only 'this' keyword returns empty object
// console.log(this)
// this.a=10
// this.b=20
// console.log(this)

//Using object literals as values in another object
//string literals
// var fname="Adnan"
// var lname="Sohail"
// //object literal
// var l3={
//     firstName: fname,
//     lastName: lname,
// }
// console.log(l3)
// var l4={
//     fname,
//     lname
// }
// console.log(l4)

//Set and Get properties using . and []
// let l5={
//     firstName: "Adnan",
//     lastName: "Sohail"
// }
// console.log(l5)//{}
// console.log(l5.firstName,l5.lastName)//Adnan Sohail
// console.log(l5['firstName'],l5['lastName'])//Adnan Sohail
// l5.job="IT"
// console.log(l5['job'])//IT
// l5.contact=9876543210
// console.log(l5['contact'])//9876543210
// console.log(l5)//{}

//Updating, Adding, Deleting properties
// fName="Sai"
// lName="Kiran"
// //object literals
// var l6={
//     firstName: "Adnan",
//     lastName: "Sohail"
// }
// console.log(l6)//{}
// l6.firstName="Sameeth"
// l6.lastName="Farhaan"
// console.log(l6)//{}
// l6.job="IT"
// console.log(l6['job'])
// l6.contact=9876543210
// console.log(l6['contact'])
// console.log(l6)
// delete l6.lastName
// console.log(l6)

//Adding properties and functions to an empty object
// l7={}
// console.log(l7)
// l7.firstName="Adnan"
// l7.lastName="Sohail"
// console.log(l7)
// l7.f1=function(){
//     console.log(l7.firstName,l7.lastName)
// }
// console.log(l7)
// l7.f1()

//Nested Object
// UserDetails={
//     firstName:"Adnan",
//     lastName:"Sohail",
//     UserAddress:{
//         job:"IT",
//         contact:"9876543210"
//     }
// }
// console.log(UserDetails)
// console.log(UserDetails.firstName+' '+UserDetails.lastName)
// console.log(UserDetails.UserAddress.job+' '+UserDetails.UserAddress.contact)

//call()
// var l8={
//     firstName:"Adnan",
//     lastName:"Sohail",
//     f2:function(){
//         console.log(this),
//         console.log(this.firstName+' '+this.lastName)
//     }
// }
// console.log(l8)
// l8.f2()
// var l9={
//     firstName:"Sameeth",
//     lastName:"Farhaan"
// }
// l8.f2.call(l9)
// console.log(l9)
// var l10={
//     firstName:"Shaiksha",
//     lastName:"Vali"
// }
// l8.f2.call(l10)
// console.log(l10)

// var l11={
//     firstName:"Adnan",
//     lastName:"Sohail",
// }
// console.log(l11)
// f3=function(){
//     console.log(this.firstName+' '+this.lastName)
// }
// f3.call(l11)
// var l12={
//     firstName:"Shaiksha",
//     lastName:"Vali"
// }
// f3.call(l12)

// var l13={
//     firstName:"Zareen",
//     LastName:"Taj",
//     f4:function(age,contact){
//         console.log(this)
//         console.log(age,contact)
//         console.log(l13)
//     }
// }
// l13.f4(26,9876543210)
//Call
// l13.f4.call(l13,28,2345678901)
//Apply
// l13.f4.apply(l13,[30,9867543210])
//Bind
// var b=l13.f4.bind(l13,32,9087654321)
// b()

//Filter
// l14=[10,20,30,40,50]
// console.log(l14)
// function f5(value){return value>10}
// console.log(l14.filter(f5))
// let l15=l14.filter(function(values){return values>20})
// console.log(l15)
// let l16=l14.filter(function(values){return values>30})
// console.log(l16)
// let l17=l14.filter(function(values){return values>40})
// console.log(l17)

//Map
// l18=[10,20,30,40,50]
// console.log(l18)
// //Function outside the map
// function f6(values){return values*2}
// console.log(l18.map(f6))
// //Function inside the map
// let l19=l18.map(function(values){return values*2})
// console.log(l19)
// //Arrow function inside the map
// let l20=l18.map((values) => {return values*2})
// console.log(l20)
// let l21=l18.map((values)=>{console.log(values*2)})

//Reduce
l22=[10,20,30,40,50]
function f7(x,y){return x+y}
console.log(l22.reduce(f7))