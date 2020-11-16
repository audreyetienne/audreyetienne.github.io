const newsTitre = document.querySelector("#news .titre");

newsContentTitre = {
    en : "News and releases",
    fr : "Actualités et publications"
}

newsContentText = 
    {
        fr : [
            {
                date : "23 Janvier 2020",
                image : "banner-le-monde.jpg",
                description : "Tribune publiée dans le Monde.",
                read : "Lire l'article",
                link : "https://www.lemonde.fr/idees/article/2020/01/23/reforme-des-retraites-revaloriser-les-salaires-des-fonctionnaires-est-urgent_6026920_3232.html?fbclid=IwAR3WSi7h2P2jzYPuUNzc_Dw1bGp76cWvnPyh9oZvB4D5b9zmE_RqvPj3xvk"
            }
        ],

        en : [
            {
                date : "January 23rd 2020",
                image : "banner-le-monde.jpg",
                description : "Op-ed article published in french newspaper <em>Le Monde</em>.",
                read : "Read",
                link : "https://www.lemonde.fr/idees/article/2020/01/23/reforme-des-retraites-revaloriser-les-salaires-des-fonctionnaires-est-urgent_6026920_3232.html?fbclid=IwAR3WSi7h2P2jzYPuUNzc_Dw1bGp76cWvnPyh9oZvB4D5b9zmE_RqvPj3xvk"
            }
            
        ]
    }


let newsContent = document.querySelector(".news-content");

for (let i = 0 ; i<newsContentText.fr.length ; i++){
    let infoContainer = document.createElement("div")
    infoContainer.classList.add("info-container");
    let dateNews = document.createElement("div")
    dateNews.classList.add("date-news");
    let imageNews = document.createElement("div")
    imageNews.classList.add("image-news");
    let newsDescription = document.createElement("div")
    newsDescription.classList.add("news-description");
    let newsLink = document.createElement("div");
    newsLink.classList.add("news-link");

    infoContainer.appendChild(dateNews);
    infoContainer.appendChild(imageNews);
    infoContainer.appendChild(newsDescription);
    infoContainer.appendChild(newsLink)

    newsContent.appendChild(infoContainer)
}

const fillNewsContent = (obj)=>{
    // let infoContainerArray = document.querySelectorAll(".info-container");
    let dateNewsArray = document.querySelectorAll(".date-news");
    let imageNewsArray = document.querySelectorAll(".image-news");
    let newsDescriptionArray = document.querySelectorAll(".news-description");
    let newsLinkArray = document.querySelectorAll(".news-link")
    
    // for (let i=infoContainerArray.length-1 ; i<0 ; i--){
        dateNewsArray[0].innerHTML = obj[0].date;
        imageNewsArray[0].innerHTML = `<img src="./assets/${obj[0].image}" width = "100%" />`
        newsDescriptionArray[0].innerHTML = obj[0].description;
        newsLinkArray[0].innerHTML = `<a href="${obj[0].link}" target = "_blank">${obj[0].read}</a>`
        
    //}
}

fillNewsContent(newsContentText.en)

newsTitre.textContent = newsContentTitre.en;
let newsContentFr = false;
toggleButton.addEventListener("click", ()=>{
    newsContentFr = !newsContentFr;
    (newsContentFr) ? newsTitre.textContent = newsContentTitre.fr : newsTitre.textContent = newsContentTitre.en;
    (newsContentFr) ? fillNewsContent (newsContentText.fr) : fillNewsContent (newsContentText.en)
})
