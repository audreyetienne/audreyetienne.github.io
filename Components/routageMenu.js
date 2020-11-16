const navItems = document.querySelectorAll("nav ul li");
const mainContent = document.querySelectorAll(".main-content");

const routage = (nomPage, navItem)=>{
    for(let i=0 ; i<navItem.length ; i++){
        mainContent[i].classList.add("hidden");
    }
    document.getElementById(nomPage).classList.remove("hidden");   
}


for (let i=0 ; i<navItems.length ; i++){
    navItems[i].addEventListener("click", event=>{
        switch(event.target.id){
            case "nav-item-1" : routage("home", navItems);;
            break;
            case "nav-item-2" : routage("career", navItems);
            break;
            case "nav-item-3" : routage("work", navItems);;
            break;
            case "nav-item-4" : routage("news", navItems);;
            break;
            case "nav-item-5" : routage("contact", navItems);;
            break;
            default : console.log("Problem")
        }
    })
}