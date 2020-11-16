const headerContent =document.querySelector(".header-content");

titreHeader = {
    titre : {
        en : "Audrey Etienne, Ph.D",
        fr : "Audrey Etienne, Ph.D"
    },    
    home :{
        en : "Post-doctoral Researcher",
        fr : "Chercheure post-doctorante" 
    },
    parcours : {
        en : "Career path",
        fr : "Parcours académique et professionnel" 
    },
    travaux : {
        en : "Work and achievements",
        fr : "Mes travaux" 
    },
    actualites : {
        en : "News",
        fr : "Actualités" 
    },
    contact : {
        en : "Contact",
        fr : "Me contacter" 
    }
}

let trait = `<div class="trait"></div>`, content =`<h1>${titreHeader.titre.en}</h1>
${trait}<h2>${titreHeader.home.en}</h2>`;
headerContent.innerHTML = content
let headerFrench = false;

toggleButton.addEventListener("click", ()=>{
    headerFrench=!headerFrench;

    if(headerFrench===true){
    content = `<h1>${titreHeader.titre.fr}</h1>
    ${trait}<h2>${titreHeader.home.fr}</h2>`
    } else {
    content = `<h1>${titreHeader.titre.en}</h1>
    ${trait}<h2>${titreHeader.home.en}</h2>`
    }
    
    headerContent.innerHTML = content
})


