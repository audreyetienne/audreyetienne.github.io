const choixLangue = document.getElementById("choix-langue");
choixLangue.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="30" height="20">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clip-path="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
        </g>
    </svg>
    <div class="toggle-button">
        <div class="toggler"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20"><rect width="30" height="20" fill="#ED2939"/><rect width="20" height="20" fill="#fff"/><rect width="10" height="20" fill="#002395"/>
    </svg>`


const toggleButton = document.querySelector(".toggle-button");
const toggler = document.querySelector(".toggler");

