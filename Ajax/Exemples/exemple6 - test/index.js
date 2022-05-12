let btn = document.querySelector(".btn");
btn.addEventListener("click", onclick);
let container = document.querySelector(".container");

function onclick(){
    console.log("ca marche");
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3466&api_key=T9hVNyzvP2Zc0GNhKmPO8SDy0T6N7TeePjBEbMlJ')
        .then(response => {console.log(response);
            return response.json(); 
        })
        .then(photos => {
            console.log(photos);
            console.log(photos.photos[0]);
            console.log(photos.constructor.name);
            for(let i=200; i<442; i++){
            // for (const item of photos){
            //     console.log(item);
            // }
            
                //    container.innerHTML += "<p>"+valeur['firstname']+"</p><p>"+valeur['lastname']+"</p><p>"+valeur['email']+"</p>";
                    
                    container.innerHTML += 
                   `
                   <img src=${photos.photos[i].img_src}  alt="">
                        
                        
                    `
        
            } 
        
        })
}