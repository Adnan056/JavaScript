// var s1="Adnan Sohail"
// console.log(s1)
// document.write(s1)
// document.write("<br><br>")

// var l1=[10,20,30,40,50]
// console.log(l1)
// document.write(l1)
// document.write("<br><br>")

// var obj1={
//     UserName:"Adnan Sohail",
//     UserAddress:"Hyd",
//     UserContact:9876543210
// }
// console.log(obj1)
// document.write(obj1.UserName," ",obj1.UserAddress," ",obj1.UserContact)

// var v=document.getElementById("id1")
// console.log(v)
// v.style.border="2px solid blue"
// v.style.width="100%"
// v.textContent="MAMA MIA"
// v.innerText="JS is a Easy PROGRAMMING LANGUAGE"
// v.innerHTML="GoLANG IS THE SHIT"
// v.innerHTML="<h2>GoLANG IS THE SHIT</h2>"

var f=document.getElementsByName("phone")
console.log(f)
f.forEach(f=>{
    if(f.checked){
        console.log(f.value)
}})

// let pp = document.getElementsByTagName("li");
// pp[0].style.backgroundColor="green";

// let des = document.getElementsByClassName("desserts")
// des[1].style.backgroundColor="green";

let ele= document.querySelector("#id1")
ele.style.backgroundColor="Maroon"

let ele1= document.querySelector("li")
ele1.style.backgroundColor="Maroon"