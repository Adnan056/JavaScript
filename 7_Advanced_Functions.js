//For Each
// l1=[10,20,30,40,50]
// console.log(l1)
// l1.forEach(function(value){console.log(value)})
// l1.forEach(function(value,index){console.log(value,index)})
// function f1(value,index){console.log(value,index)}
// l1.forEach(f1)
// function f2(value,index,elements){console.log(value,index,elements)}
// l1.forEach(f2)

//Rest Operator
// function f3(x,y,z){console.log(x+y+z)}
// f3(10,20,30)
// function f4(x,y,z,...args){console.log(x+y+z,"and",...args)}
// f4(10,20,30,40,50,60)

//Spread Operator

//Arrays
// l2=[10,20,30,40,50]
// l3=[60,70,80,90,100]
// l4=[...l2,...l3]
// console.log(l4)

//Objects
// obj1={
//     Name1:"Adnan",
//     Number1:9949584535
// }
// obj2={
//     Name2:"Shaiksha",
//     Number2:9876543210
// }
// obj3={
//     ...obj1,
//     ...obj2
// }
// console.log(obj3)

//spread Operator 2
// Arrayone=[10,20,30,40,50]
// console.log(Arrayone)

// //Function
// function f1(n1,n2,n3,n4){
//     console.log(n1,"",n2,"",n3,"")
// }
// f1(10,20,30,40)
// f1()
// f1(...Arrayone)
// f1(100,...Arrayone)

//Rest Operator and Spread Operator
// var obj1={
//     UserName:"Adnan",
//     UserContact:9876543210,
//     UserAge:26,
//     UserAddress:"Hyd"
// }
// console.log(obj1)
// var {UserName,...r}=obj1
// console.log(obj1)
// var obj2={
//     ...obj1,
// }
// console.log(obj2)