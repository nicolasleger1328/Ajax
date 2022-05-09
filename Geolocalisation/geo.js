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

function gps(position){
    document.getElementById("latit").textContent = position.coords.latitude;
    document.getElementById("long").textContent = position.coords.longitude;
}

function getUserLocation(){

    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition();
        if(!navigator.geolocation){
            reject("DONNEES GPS INDISPONIBLE");
        }
        else{
            resolve(position);
        }

    });



}

getUserLocation()
    .then(gps)
    .catch()