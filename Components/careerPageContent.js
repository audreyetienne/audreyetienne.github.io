careerTitre = {
    en : "Career",
    fr: "Parcours"
}
let divTitreCareer = document.querySelector("#parcours .titre");
divTitreCareer.innerHTML = careerTitre.en

let miniNavBarItems = document.querySelectorAll(".mini-navbar ul li div");
let actionH2 = document.querySelectorAll(".action h2");

miniNavBarItemContent = {
    en : ["Research career", "Teaching", "Diplomas", "Other experiences"],
    fr: ["Recherche", "Enseignement", "Diplômes", "Autres expériences"]
}

for(let i=0 ; i<miniNavBarItems.length ; i++){
    miniNavBarItems[i].innerHTML = miniNavBarItemContent.en[i];
    actionH2[i].innerHTML = miniNavBarItemContent.en[i];
}


const colonneDescription = document.querySelectorAll(".description")

const tableTextDescription = {
    en : ["<b>OFCE-Sciences Po</b>, Post-doctoral Researcher.","<b>Université Paris-Est Créteil (UPEC)</b>, Teaching and Research Assistant in Economics (ATER), Créteil.","<b>University of Tours</b>, Teaching and Research Assistant in Economics, Tours","<b>Aix-Marseille School of Economics (AMSE)</b>, Teaching and Research Assistant (ATER), Marseille.","<b>Aix-Marseille School of Economics (AMSE)</b>, PhD Candidate, Marseille. <br/><b>Advisor</b> : Olivier Bargain<br/> <b>Title</b> : <em>Three Essays on Workers’ Self-Selection</em><br/><b>Completion</b> : December 2018<br/><b>Research Interests</b> : <em>labour economics, applied microeconomics, industrial economics, public economics</em>","<b>Université Paris-Est Créteil (UPEC)</b>, Teaching and Research Assistant in Economics (ATER).<br/><b>Subjects & classes</b> : <em>Statistics</em> (BA 1st year), <em>Finance</em> (BA 2nd year), <em>Time Series</em> (Master 1st year).", "<b>University of Tours</b>, Teaching and Research Assistant in Economics (ATER)<br/><b>Subjects & classes</b> : <em>Macroeconomics</em> (BA 1st year, 2nd year and 3rd year).","<b>Aix-Marseille School of Economics (AMSE)</b>, Teaching and Research Assistant (ATER)<br/><b>Subjects & classes</b> : Microeconomics (BA 1st year), Econometrics (Master 1st year).", "<b>Fully qualified teacher in Economics and Social Sciences</b> (secondary school level), <em>on leave</em>.", "<b>Lycée Freyssinet</b>, Intern Teacher in Economics and Social Sciences, Saint-Brieuc.", "<b>Secondary Education Teaching Certificate in Economics and Social Sciences</b> (CAPES de SES).", "<b>Paris School of Economics</b>, <em>Master’s degree in Public Policy and Development</em>, Paris.","<b>ESCP Europe</b>, <em>Master’s and Bachelor’s degrees in Management</em>, Paris."],

    fr : ["<b>OFCE-Sciences Po</b>, Chercheure post-doctorante.","<b>Université Paris-Est Créteil (UPEC)</b>, ATER (attachée temporaire d'enseignement et de recherche), Créteil.","<b>Université de Tours</b>, ATER, Tours","<b>Aix-Marseille School of Economics (AMSE)</b>, ATER, Marseille.", "<b>Aix-Marseille School of Economics (AMSE)</b>, Doctorat en économie, Marseille. <br/><b>Directeur de thèse</b> : Olivier Bargain<br/> <b>Titre</b> : <em>Trois essais sur l'auto-sélection des salariés</em><br/><b>Date de soutenance</b> : Décembre 2018<br/><b>Intérêts de recherche</b> : <em>économie du travail, microéconomie appliquée, économie industrielle, économie du secteur public</em>","<b>Université Paris-Est Créteil (UPEC)</b>, ATER.<br/><b>Matières enseignées</b> : <em>Statistiques</em> (Licence 1), <em>Finance</em> (Licence 2), <em>Séries temporelles</em> (Master 1).", "<b>Université de Tours</b>, ATER<br/><b>Matières enseignées</b> : <em>Macroéconomie</em> (Licence 1, 2 et 3).", "<b>Aix-Marseille School of Economics (AMSE)</b>, ATER<br/><b>Matières enseignées</b> : Microéconomie (Licence 1), Econométrie (Master 1).","<b>Professeure certifiée en Sciences économiques et sociales</b>, <em>actuellement en disponibilité</em>.", "<b>Lycée Freyssinet</b>, Professeure stagiaire en Sciences économiques et sociales, Saint-Brieuc.", "Obtention du <b>CAPES en Sciences économiques et sociales</b>.", "<b>Paris School of Economics</b>, <em>Master Politique Publique et Développement</em>, Paris.","<b>ESCP Europe</b>, <em>Licence et Master en Management</em> (<b>Programme Grande Ecole</b>), Paris."]
}


for(let i = 0 ; i<colonneDescription.length ; i++){
    colonneDescription[i].innerHTML = tableTextDescription.en[i]
}



const arrows = [document.querySelector("#cv-titre"), document.querySelector("#parcours small"), document.querySelector("div h5")]
const arrowsContent = {
    en : ["<small>You can download resume on bottom page.</small>", "Return to top page", "Click below to download resume."],
    fr : ["<small>CV téléchargeable en bas de page.</small>", "Retour haut de page", "Cliquez sur l'image pour télécharger le CV."]
}
for (let i=0 ; i<arrows.length ; i++){
    arrows[i].innerHTML = arrowsContent.en[i]
}

const colonne1Array = document.querySelectorAll(".colonne-1")
colonne1Array[8].innerHTML = "2013 to date"

const landMarks = document.querySelectorAll(".action h2");
let careerContentFr = false;
toggleButton.addEventListener("click", ()=>{
    careerContentFr = !careerContentFr;
    if(careerContentFr){
        divTitreCareer.innerHTML = careerTitre.fr
        colonne1Array[8].innerHTML = "2013 à ce jour"
        for (let i=0 ; i<arrows.length ; i++){
            arrows[i].innerHTML = arrowsContent.fr[i]
        }
        for(let i = 0 ; i<colonneDescription.length ; i++){
        colonneDescription[i].innerHTML = tableTextDescription.fr[i]
        }
        for (let i=0 ; i<landMarks.length ; i++){
            landMarks[i].innerHTML = miniNavBarItemContent.fr[i]
        }


    } else {

        divTitreCareer.innerHTML = careerTitre.en;
        colonne1Array[8].innerHTML = "2013 to date"
        for (let i=0 ; i<arrows.length ; i++){
            arrows[i].innerHTML = arrowsContent.en[i]
        }
        for(let i = 0 ; i<colonneDescription.length ; i++){
            colonneDescription[i].innerHTML = tableTextDescription.en[i];
        }
        for (let i=0 ; i<landMarks.length ; i++){
            landMarks[i].innerHTML = miniNavBarItemContent.en[i]
        }
    }
    


    // for(let i = 0 ; i<htmlElements.length ; i++){
    //     if (careerContentFr){
    //         htmlElements[i].innerHTML = careerTextContent.fr[i]
    //     } else {
    //         htmlElements[i].innerHTML = careerTextContent.en[i]
    //     }
        
    // }
    for(let i=0 ; i<miniNavBarItems.length ; i++){
        if(careerContentFr){
            miniNavBarItems[i].innerHTML = miniNavBarItemContent.fr[i]
        } else{
            miniNavBarItems[i].innerHTML = miniNavBarItemContent.en[i];
        }
    }
})

/***********Parcours******************/

const downArrow = document.querySelector("#down-arrow");
downArrow.addEventListener("click", ()=>{
    window.scrollTo(0, document.getElementById("pdf-cv").offsetTop)
})

const upArrow = document.querySelector("#up-arrow");
upArrow.addEventListener("click", ()=>{
    window.scrollTo(0, 0)
})

const miniNavBar = document.querySelector(".mini-navbar")
navItems[1].addEventListener("click", ()=>{
    if(!document.getElementById("parcours").classList.contains("hidden") && window.innerWidth>980){
        let miniNavBar = document.querySelector(".mini-navbar");
        let liMiniNavBar = document.querySelectorAll(".mini-navbar ul li");
        miniNavBar.style.display = "block";
        for(let i =0 ; i<liMiniNavBar.length ; i++){
        liMiniNavBar[i].classList.remove("selected");
        window.scrollTo(0, 0)
        }
        console.log(liMiniNavBar)
        miniNavBar.style.display = "block"
        if(window.innerWidth>1680 && miniNavBar){
            miniNavBar.style.display = "block"
            miniNavBar.style.marginLeft = 100+"px"
        } else if(window.innerWidth<1600 && window.innerWidth>1400 && miniNavBar){
            miniNavBar.style.display = "block"
            miniNavBar.style.marginLeft = 80+"px"
        } else if (window.innerWidth<1400 && window.innerWidth>1180 && miniNavBar){
            miniNavBar.style.display = "block"
            miniNavBar.style.marginLeft = 2+"px"
        } 


        for (let i = 0; i<liMiniNavBar.length ; i++){    
            liMiniNavBar[i].addEventListener("click", ()=>{
                let listeAnnees = [
                    document.querySelector("#annee-2020").offsetTop,
                    document.querySelector("#annee-2019").offsetTop,
                    document.querySelector("#annee-2018").offsetTop,
                ]
                let YParcoursConteneur = document.querySelector("#career").offsetTop;
                window.scrollTo(0,YParcoursConteneur+listeAnnees[i])
            }) 
        }

        window.addEventListener("resize", ()=>{

            if(window.innerWidth>1680 && miniNavBar){
                miniNavBar.style.display = "block"
                miniNavBar.style.marginLeft = 100+"px"
            } else if(window.innerWidth<1680 && window.innerWidth>1400 && miniNavBar){
                miniNavBar.style.display = "block"
                miniNavBar.style.marginLeft = 80+"px"
            } else if (window.innerWidth<1400 && window.innerWidth>980 && miniNavBar){
                miniNavBar.style.display = "block"
                miniNavBar.style.marginLeft = 2+"px"
            } else {
                miniNavBar.style.display = "none"
            }
        })
    
        window.addEventListener("scroll", ()=>{
            const CVConteneur = document.querySelector("#cv-conteneur")
            let listeAnnees = [
                document.querySelector("#annee-2020").offsetTop,
                document.querySelector("#annee-2019").offsetTop,
                document.querySelector("#annee-2018").offsetTop,
            ]

            let YParcoursConteneur = document.querySelector("#career").offsetTop;
            if(window.scrollY < (YParcoursConteneur+listeAnnees[0])){
                liMiniNavBar[0].classList.remove("selected");
            } else if(window.scrollY >= (YParcoursConteneur+listeAnnees[0]) && window.scrollY < (YParcoursConteneur+listeAnnees[1])){
                liMiniNavBar[1].classList.remove("selected");
                liMiniNavBar[0].classList.add("selected"); 
            } else if(window.scrollY >= (YParcoursConteneur+listeAnnees[1]) && window.scrollY < (YParcoursConteneur+listeAnnees[2])){
                liMiniNavBar[2].classList.remove("selected");
                liMiniNavBar[1].classList.add("selected");
                liMiniNavBar[0].classList.remove("selected");               
            } else if(window.scrollY >= (YParcoursConteneur+listeAnnees[2]) && window.scrollY < (CVConteneur.offsetTop)){
                liMiniNavBar[2].classList.add("selected"); 
                liMiniNavBar[1].classList.remove("selected");    
            }
        })
    }
})
        
    window.addEventListener("scroll", ()=>{
        if (window.scrollY>300){
            miniNavBar.style.top = -180 +"px";
        } else {
            miniNavBar.style.top = (190-window.scrollY)+"px";
        }
    })
    


    


    




/*****************Fin partie Parcours***********************/