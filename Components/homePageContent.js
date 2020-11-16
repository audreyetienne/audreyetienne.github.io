const homePageContent = document.querySelector("#home");

aboutMe = {
    en :"<p>I am currently a postdoctoral re&shy;searcher at <b>OFCE-Sciences Po (French Economic Observatory)</b>, where I work on the <b>research project PRODIGE</b> about orchestras, dis&shy;criminations and gender.</p><p>I received my PhD in Economics from <b>Aix-Marseille University</b> in 2018. My main research interests are in labor, public and industrial economics. I am particularly in&shy;terested in earnings inequalities and the role of skill match, as well as in firm efficiency.</p>" ,

    fr : `<p>Ayant obtenu en 2018 mon doctorat en Sciences économiques à <b>l’Université d’Aix-Marseille</b>, je suis actuellement chercheure post-doctorante à l’<b>OFCE-Sciences Po (Observatoire Français des Conjectures Econo&shy;miques)</b>. Je travaille actuellement sur le <b>projet PRODIGE</b> qui vise à évaluer l'impact des auditions "à l'aveugle" sur le profil des musiciens permanents recrutés dans les orchestres français.</p><p>Mes principaux thèmes de recherches se situent autour de l'économie du travail, l'économie publique et l'éco&shy;nomie industrielle. Je porte un intérêt particulier aux sujets concernant les iné&shy;galités salariales, le rôle du <em>skill match</em>, et les déterminants de la productivité des entreprises.</p>`
    
}
titre ={
    en : "About me",
    fr :"Qui suis-je ?"
}

const titreMain = document.querySelector("main .titre");
titreMain.textContent = titre.en;

const textMain = document.querySelector("main #about-me");
textMain.innerHTML = aboutMe.en;

let frenchHomePageContent = false;
toggleButton.addEventListener("click", ()=>{
    frenchHomePageContent=!frenchHomePageContent;

    if (frenchHomePageContent) {
        titreMain.textContent = titre.fr
        textMain.innerHTML  = aboutMe.fr
    } else {
        titreMain.textContent = titre.en
        textMain.innerHTML = aboutMe.en;
    } 
})
