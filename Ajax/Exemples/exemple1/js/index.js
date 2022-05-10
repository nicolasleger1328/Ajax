let btn = document.querySelector("button");
let container = document.querySelector(".container");
btn.addEventListener("click", onclick);

function onclick(){
    console.log("ca marche");
    fetch('serveur/partial.html')
    .then(function(response) {
        console.log("OK! Server returns a response object:");
        console.log(response);
        
        response.text()
        .then(function(myText) {
            
            console.log(myText);
            container.innerHTML = myText;
      })
    })
}