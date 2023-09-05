//Arthematic Operators
var a=10
var b=20

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Assignment Operators +=, -=, /=, *=, %=

var c=30
var d=40

console.log(c+=1)
console.log(c-=1)
console.log(c/=1)
console.log(d*=2)
console.log(d%=4)

var e=1 //post increment/decrement e++ e--

console.log(e)
console.log(e++)
console.log(e)
console.log(e--)
console.log(e)

var f=2 //pre increment/decrement ++f --f

console.log(f)
console.log(++f)
console.log(f)
console.log(--f)
console.log(f)

//comparision operators
var g=10
var h=20
var i=20

console.log(g>h)
console.log(i>h)

console.log(g>=h)
console.log(i>=h)

console.log(i==h)
console.log(i==g)

console.log(i!=h)

var j = 10
var k = 10.00
var l = "10"

console.log(j == k) // "==" checks if the variable value is same
console.log(j === k)// "===" checks if the variable's value and datatype is same

console.log(j == l)
console.log(j === l)

//bitwise [(AND "&"), (OR "|")] operators
//bitwise gives you numbers as output

console.log(true & true)//1
console.log(true & false)//0
console.log(false & true)//0
console.log(false & false)//1

console.log(true | true)//1
console.log(true | false)//1
console.log(false | true)//1
console.log(false | false)//0

//true carries value "1" and false carries value "0"

//logical [(&&,||)] operators
//logical gives you boolean value True or False

console.log(true && true)//true
console.log(true && false)//false
console.log(false && true)//false
console.log(false && false)//false

console.log(true || true)//true
console.log(true || false)//true
console.log(false || true)//true
console.log(false || false)//false

//Ternary Operators
var m=10
var n
n = (m!=10) ? "It is ten":"It is not ten"
console.log(n)