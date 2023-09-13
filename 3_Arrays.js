//Arrays

//indexOf
li=[1,2,3,4]
console.log(li.indexOf(1))
console.log(li.indexOf(2))
console.log(li.indexOf(5))
console.log(li.indexOf(10))


//includes
console.log(li.includes(3))
console.log(li.includes(4))
console.log(li.includes(5))

//push
li.push(5)
li.push(6)
console.log(li)

//pop
li.pop()
console.log(li)

//shift
li.shift()
console.log(li)

//unshift
li.unshift(1)
console.log(li)

//slice
li.slice[0,3]
console.log(li.slice(0,4))

//find
function f1(li){
    return li>3
}
console.log(li.find(f1))

//index of
console.log(li.lastIndexOf())

//concat
var s1="Hello"
var s2=" World"
console.log(s1.concat(s2))

//join
var a=['H','e','l','l','o']
console.log(a.join(""))

//isArray
var arr=[2,2,2,2]
console.log(Array.isArray(arr))

//length
console.log(arr.length)