let btn = document.querySelector("button");
let container = document.querySelector(".container");
btn.addEventListener("click", onclick);

function onclick(){
    console.log("ca marche");
    fetch('serveur/getData.php')
        .then(response => response.text())
        .then(myText => container.innerHTML = myText)
            
}
