let btn = document.querySelector("button");
let container = document.querySelector(".container");
btn.addEventListener("click", onclick);

fetch("serveur/partial.html")
    .then(response =>{
        return response.text();
    })
    .then(html =>{
        console.log(html);
    });


// encore plus court, on peut enlever les {} et le return quand il n'y a qu'une seule instructions dans la fonction 

fetch("serveur/partial.html")
    .then(response=> response.text())
    .then(html=> document.getElementById("container").innerHTML = html);