const nav = document.querySelectorAll('nav ul li');

menuItems= {
    en : ["Home", "Career", "Research", "News", "Contact"],
    fr : ["Accueil", "Parcours", "Recherche", "Actualités", "Contact"]
  }


for(let i=0 ; i<nav.length ; i++){
    nav[i].textContent = menuItems.en[i]
}

let french=false;
let exActive= document.querySelector(".active");
toggleButton.addEventListener("click", ()=>{
    french=!french
    toggleButton.classList.toggle("fr");
    toggler.classList.toggle("slide");

    for(let i=0 ; i<nav.length ; i++){
        (french) ? nav[i].textContent = menuItems.fr[i] : nav[i].textContent = menuItems.en[i];     
    }
});

for (let i=0 ; i<nav.length ; i++){
    nav[i].addEventListener("click", (event)=>{
        choixMenuItemActive(event);
        window.scrollTo(0, 0);
        console.log(window.innerHeight)
    })
};


function choixMenuItemActive(event){
        exActive= document.querySelector(".active");
        exActive.classList.remove("active")
        event.target.classList.add("active");
}
