let abs = document.querySelector("#abscisse");
let ord = document.querySelector("#ordonnee");
let long = document.querySelector("#longueur");
let larg = document.querySelector("#largeur");
let couleur = document.querySelector("#couleur");
let opac = document.querySelector("#opacite");
console.log("hello");

couleur.addEventListener('change', ()=>{
    fetch(`shape.php?couleur=${couleur.value}`)
    .then(response =>{
        console.log(response);
        return response.text();
    })
    .then(html =>{
        console.log(html);
        change.setAttribute("fill", html)   
    });
   
})