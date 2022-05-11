
let container = document.querySelector(".container");
function gps(position){
    let plat = document.querySelector(".latit");
    let plon = document.querySelector(".long");
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    plat.textContent= "la latitude est "+lat;
    plon.textContent= "la longitude est "+long;
    
}

function showError(error){
    console.log(error);
}



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
//Essai

function getWeather(position){

    return new Promise((resolve,reject)=>{
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    fetch(`http://api.weatherstack.com/current?access_key=ef1c86fbc44c37546799531b7d429e19&query=${lat},${long}`)
        .then(response => {console.log(response);
            return response.json();
        })
        .then(meteo => { console.log(meteo);
            resolve(meteo)})
    });
        

        
}
function weatherAffiche(meteo){
    container.innerHTML += 

                               `    <h2>${meteo.location.name}, ${meteo.location.country}, ${meteo.location.region}</h2>
                                    <p>Situation à ${meteo.current.observation_time}<p>
                                    <p>Temperature : ${meteo.current.temperature}°C</p>
                                    <p>Humidité : ${meteo.current.humidity}%</p>
                                    <p>Indice UV: ${meteo.current.uv_index}</p>
                                    <p>Pression Atmo: ${meteo.current.pressure} hP</p>
                                    <p><img src="${meteo.current.weather_icons}" alt="">
                                    
                                    
                                    
                                `
}
getUserLocation1()
    .then(position => {
        gps(position);
        return getWeather(position)})
    .then(meteo => {
        weatherAffiche(meteo);
                })
    .catch(showError)