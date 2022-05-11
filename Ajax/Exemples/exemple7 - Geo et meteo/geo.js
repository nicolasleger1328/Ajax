// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     let alti = position.coords.altitude;
//     let plat = document.querySelector(".latit");
//     let plon = document.querySelector(".long");

//     plat.textContent= "la latitude est "+lat;
//     plon.textContent= "la longitude est "+long;


//     console.log("la latitutude:  "+lat+" degrees"); 
//     console.log("la longitude: "+long+" degrees");
//     console.log("l'altitude:  "+alti+" degrees");
    
//   });

//   if(!navigator.geolocation){
//       console.error("Erreur:...");
//   }
//   else{
//       navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
//   }

//   function onSuccess(position){
//       console.log(position);
//   }

//   function onFailure(error){
//       console.log(error);
//   }

//   navigator.geolocation.getCurrentPosition(position =>{
//       document.getElementById("latit").textContent = position.coords.latitude;
//       document.getElementById("long").textContent = position.coords.longitude;
//   },
//     error=>{console.log(error.message);}
  
//   );
let container = document.querySelector(".container");
function gps(position){
    let plat = document.querySelector(".latit");
    let plon = document.querySelector(".long");
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    plat.textContent= "la latitude est "+lat;
    plon.textContent= "la longitude est "+long;
    fetch(`http://api.weatherstack.com/current?access_key=ef1c86fbc44c37546799531b7d429e19&query=${lat},${long}`)
        .then(response => {console.log(response);
            return response.json();
        })
        .then( meteo => {console.log(meteo);
                        console.log(meteo.current);
                        // for (let valeur of meteo.current) {
                            //    container.innerHTML += "<p>"+valeur['firstname']+"</p><p>"+valeur['lastname']+"</p><p>"+valeur['email']+"</p>";
                                // container.innerHTML = "";
                                container.innerHTML += 
                               `
                                    <p>TEMPERATURE : ${meteo.current.temperature}</p>
                                    <p><img src="${meteo.current.weather_icons}" alt="">
                                    
                                    
                                    
                                `
                        //   }      

        })
}

function showError(error){
    console.log(error);
}

// function getUserLocation(){

//     return new Promise((resolve, reject)=>{
//         navigator.geolocation.getCurrentPosition((position)=>{
            
//             resolve(position);
//         }, ()=>{
//             reject();
//         });
        
//     });



// }

// exo qui marxche

    // function getUserLocation(){

    //     return new Promise((resolve, reject)=>{
    //         navigator.geolocation.getCurrentPosition( resolve, ()=>{
    //             reject();
    //         });
            
    //     });
    
    
    
    // }

    // getUserLocation()
    // .then(gps)
    // .catch()

// CORRECTion

function getUserLocation(){
    return new Promise((resolve, reject)=>{
        if (!navigator.geolocation){
            return reject("API geolocation non dispo");
        }
        navigator.geolocation.getCurrentPosition(position=>{
            resolve(position);
        }, error=>{
            reject(error.message);
        });
    });
}

// encore plus simplifié

function getUserLocation1(){
    return new Promise((resolve, reject)=>{
        if (!navigator.geolocation){
            return reject({message:"API geolocation non dispo"});
        }
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getUserLocation1()
    .then(gps)
    .catch(showError)
