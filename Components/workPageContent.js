const workTitre = document.querySelector("#work .titre");

workContentTitre = {
    en : ["Research articles"],
    fr : ["Articles de recherche"]
}


const workItems = document.querySelectorAll("#work-items li");

const listContainer = document.querySelectorAll(".conteneur-liste");
let selectedWorkItem = document.querySelector("#work-items .selected");
let listItemDisplay = document.querySelector(".display");

for(let i = 0 ; i<workItems.length ; i++){
    workItems[i].addEventListener("click", ()=>{
        
        selectedWorkItem.classList.remove("selected")
        workItems[i].classList.add("selected");
        listItemDisplay.classList.remove("display");
        listContainer[i].classList.add("display");
        listItemDisplay.style.transform = `translateX(${(-i*100)}%)`;
        listContainer[i].style.transform = `translateX(${(-i*100)}%)`;
        selectedWorkItem = document.querySelector("#work-items .selected");
        listItemDisplay = document.querySelector(".display");
    })
}

workTitre.innerHTML = workContentTitre.en;
let workContentFr = false;
toggleButton.addEventListener("click", ()=>{
    workContentFr = !workContentFr;
    (workContentFr) ? workTitre.innerHTML = workContentTitre.fr : workTitre.innerHTML = workContentTitre.en;
})


const abstractBtn = document.querySelectorAll(".work-date");
let textDisplays = document.querySelectorAll(".work-text-container");
for(let i=0 ; i<abstractBtn.length ; i++){
    abstractBtn[i].addEventListener("click", ()=>{
        abstractBtn[i].classList.toggle("show");
        if(abstractBtn[i].classList.contains("show")) {    
            abstractBtn[i].innerHTML = "Hide abstract &#x25b2;";
            abstractBtn[i].classList.add("chosen");
            textDisplays[i].style.maxHeight = textDisplays[i].scrollHeight + 'px';
            
        } else {           
            abstractBtn[i].innerHTML = "Show abstract &#x25bc;";
            abstractBtn[i].classList.remove("chosen");
            textDisplays[i].style.maxHeight = '0px';
        }
    })   
}


