var uid = new ShortUniqueId();
let addbtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let textArea = document.querySelector(".textarea-cont");
const colors =["lightpink","lightgreen","lightblue","black"];
let modaPriorityColors = colors[colors.length-1]; 
const mainCont = document.querySelector(".main-cont")
// let ticketPriorityColors =["lightpink","lightgreen","lightblue","black"]
let allPriorityColor = document.querySelectorAll(".priority-color")
let toolBoxColors =document.querySelectorAll(".toolbox-color-cont>*")
console.log(toolBoxColors);








let isModalPresent = false
addbtn.addEventListener("click", function(){


if(!isModalPresent){
    modalCont.style.display ="flex";

}
else if(isModalPresent){
    modalCont.style.display="none";
  
}
isModalPresent = !isModalPresent;

})

modalCont.addEventListener("keydown", (e)=>{
    // console.log(e);
if(e.key==="Shift"){
    // modalCont.style.display="none"
    createTicket(modaPriorityColors,textArea.value)
    modalCont.style.display= "none";
    isModalPresent = false;
    textArea.value = ""
}
});

function createTicket(ticketcolor,data)
{
   let id = uid();
   let ticketCont = document.createElement("div")
   ticketCont.setAttribute("class","ticket-cont")
   ticketCont.innerHTML=`
        <div class="ticket-color ${ticketcolor}"></div>
        <div class="ticket-id">${id}</div>
        <div class="task-area">${data}</div>
        <div class="ticket-lock">
            <i class="fa-splid fa-lock"></i>
        </div>
        
   
   `;

   mainCont.append(ticketCont);
}

// Selecting Priority Color and passing modalprioritycolor to ticket create function.
allPriorityColor.forEach((colorElement)=>{
colorElement.addEventListener("click",function(){
    allPriorityColor.forEach(el =>{
        el.classList.remove("active");
    })
  
    colorElement.classList.add("active")
    modaPriorityColors=colorElement.classList[0]
});
});
