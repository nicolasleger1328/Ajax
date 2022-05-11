let btn = document.querySelector(".ques");
let btn1 = document.querySelector(".ans");
let container = document.querySelector(".container-ques");
let container1 = document.querySelector(".container-ans");
btn.addEventListener("click", onclick);


function onclick(){
    console.log("ca marche");
    fetch('https://jservice.io/api/random')
        .then(response => response.json())
        .then(myJson => {
            console.log(myJson);
            for (let valeur of myJson) {
            //    container.innerHTML += "<p>"+valeur['firstname']+"</p><p>"+valeur['lastname']+"</p><p>"+valeur['email']+"</p>";
                container.innerHTML = "";
                container.innerHTML += 
               `
                    <p style="color:#FF0088; ">${valeur.question}</p>
                    <button class="ans">Go Get answer</button>
                    <div class="container-ans"></div>
                    
                    
                `
                let btn1 = document.querySelector(".ans");
                let container1 = document.querySelector(".container-ans");
                btn1.addEventListener("click", onclick=>{
                    container1.innerHTML = "";
                    container1.innerHTML += 
               `
                    <p style="color:#FF0088; ">${valeur.answer}</p>
                    
                `
                })
              }
        } )
        
}
