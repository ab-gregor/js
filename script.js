let name = document.getElementById("name");
let email = document.getElementById("email");
console.log(document.getElementById("name").value)
let submit = document.getElementById("submit")
submit.addEventListener('click', (e)=>{
e.preventDefault();
if(document.getElementById("name").value == ''||document.getElementById("email").value == ""){
console.log("empty")
let message = document.getElementById("message")
message.classList.add(".error")
message.innerHtml = "add two fields"
 }else{
let userList = document.getElementById("users")
const childele = document.createElement('li')
childele.appendChild(document.createTextNode(`${document.getElementById("name").value} : ${document.getElementById("email").value}`))
userList.appendChild(childele)
 }



})