document.addEventListener("DOMContentLoaded", function(){



const input = document.getElementById("input");
const nn = document.getElementById("list")
let btnAdd = document.getElementById("button-addon2")
 document.getElementById("button-addon2").addEventListener("click", function(){
 if(input.value === ""){
        alert("your input is empty")
 }
 else {
     let list = document.createElement("li");
     list.textContent = input.value;
     list.classList.add("list-group-item","category");
     nn.appendChild(list)
     
 } 
 input.value="" 
 save()

 })

list.addEventListener("click", function(e){
  e.target.remove() } )

    
  input.addEventListener("keydown" ,function (e) {
    if (e.key === "Enter" && input.value !=="") {
        let list = document.createElement("li");
     list.textContent = input.value
     list.classList.add("list-group-item","category");
     nn.appendChild(list)
     input.value="" 
     save()
    }
    
  })




  function save() {
    localStorage.setItem("data", nn.innerHTML);
}
function read() {
  nn.innerHTML=localStorage.getItem("data")
}
read()

})


 

 

