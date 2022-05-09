document.getElementById("firstFirstBox").addEventListener("click",firstBox)

function firstBox(){
    window.location.href="firstBox.html"
}

document.getElementById("firstSecBox").addEventListener("click",secBox)

function secBox(){
    window.location.href="secBox.html"
}

document.getElementById("view").addEventListener("click",ediFun)

function ediFun(){
    window.location.href="homedigvijay.html"
}

import footer from "./footer.js"

document.getElementById("footer").innerHTML = footer()

