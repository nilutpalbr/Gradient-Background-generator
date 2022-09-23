let css= document.querySelector("h3")
let color1= document.querySelector(".color1")
let color2= document.querySelector(".color2")
const body= document.getElementById("gradient")
let par= document.querySelector("p")

function setGradient(color1,color2){
    color1.addEventListener("input",function(){
        body.style.background="linear-gradient(to right, "
         +color1.value+ ", "
         +color2.value+")";
         css.textContent=body.style.background + ";";
         par.textContent=" select and copy the above color to use "
    })
    color2.addEventListener("input",function(){
        body.style.background="linear-gradient(to right, "
         +color1.value+ ", "
         +color2.value+")";
         css.textContent=body.style.background + ";";
         par.textContent=" select and copy the above color to use "
    })
  
}

setGradient(color1,color2)