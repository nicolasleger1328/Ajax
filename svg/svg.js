let couleur = document.querySelector("#couleur");
// console.log(couleur.value);
let n = couleur.value;
let change = document.querySelectorAll('.change');
console.log(change);
let opaci = document.querySelector('#opaci');

couleur.addEventListener('change', e=>{
    let n = e.target.value;
    console.log(n);
    fetch(`svg.php?couleur=${couleur.value}`)
    .then(response =>{
        console.log(response);
        return response.text();
    })
    .then(html =>{
        console.log(html);
        for(let i=0; i<change.length; i++){
            change[i].setAttribute("fill", html)
        };
         
        
    });
   
})

opaci.addEventListener('change', e=>{
    
    fetch(`svg.php?opaci=${opaci.value}`)
    .then(response =>{
        console.log(response);
        return response.text();
    })
    .then(html =>{
        console.log(html);
        for(let i=0; i<change.length; i++){
            change[i].setAttribute("opacity", html)
        };
         
        
    });
   
})


