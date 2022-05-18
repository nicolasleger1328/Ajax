let ajaxMenu = document.querySelector("#ajax_menu");
let formeLst = document.querySelector("#forme");
let change = document.querySelector("#change");

formeLst.addEventListener("change", ()=>{
    fetch(`shape.php?forme=${forme.value}`)
        .then(response=>{
            console.log(response);
            return response.text();
        })
        .then(html=>{
            console.log(html);
            ajaxMenu.innerHTML ="";
            ajaxMenu.innerHTML += html;
            rect();
            
        })
})

function rect(){
    let abs = document.querySelector("#abscisse");
    let ord = document.querySelector("#ordonnee");
    let long = document.querySelector("#longueur");
    let larg = document.querySelector("#largeur");
    let couleur = document.querySelector("#couleur");
    let opac = document.querySelector("#opacite");


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

    abs.addEventListener('change', ()=>{
        fetch(`shape.php?abscisse=${abscisse.value}`)
        .then(response =>{
            console.log(response);
            return response.text();
        })
        .then(html =>{
            console.log(html);
            change.setAttribute("x", html)   
        });
    
    })

    ord.addEventListener('change', ()=>{
        fetch(`shape.php?ordonnee=${ordonnee.value}`)
        .then(response =>{
            console.log(response);
            return response.text();
        })
        .then(html =>{
            console.log(html);
            change.setAttribute("y", html)   
        });
    
    })

    long.addEventListener('change', ()=>{
        fetch(`shape.php?longueur=${longueur.value}`)
        .then(response =>{
            console.log(response);
            return response.text();
        })
        .then(html =>{
            console.log(html);
            change.setAttribute("width", html)   
        });
    
    })

    larg.addEventListener('change', ()=>{
        fetch(`shape.php?largeur=${largeur.value}`)
        .then(response =>{
            console.log(response);
            return response.text();
        })
        .then(html =>{
            console.log(html);
            change.setAttribute("height", html)   
        });
    
    })

    opac.addEventListener('change', ()=>{
        fetch(`shape.php?opacite=${opacite.value}`)
        .then(response =>{
            console.log(response);
            return response.text();
        })
        .then(html =>{
            console.log(html);
            change.setAttribute("opacity", html)   
        });
    
    })
}