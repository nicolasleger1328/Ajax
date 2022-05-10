let btn = document.querySelector("button");
let container = document.querySelector(".container");
btn.addEventListener("click", onclick);

function onclick(){
    console.log("ca marche");
    fetch('serveur/getData.php')
        .then(response => response.json())
        .then(myJson => {
            console.log(myJson);
            for (let valeur of myJson) {
            //    container.innerHTML += "<p>"+valeur['firstname']+"</p><p>"+valeur['lastname']+"</p><p>"+valeur['email']+"</p>";
               container.innerHTML += 
               `
                    <h1 style="color:#FF0088; ">${valeur.firstname}</h1>
                    <h2><I>${valeur.lastname}</I></h2>
                    <h3 style="color:#550088;" ><U>${valeur.email}</U></h3>
                `
              }
        } )
        
}