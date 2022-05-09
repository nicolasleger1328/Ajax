// EXEMPLES DE Promesses

    // const promise = new Promise((resolve,reject)=>{
    //     const rand = Math.floor(Math.random()*10) +1;
    //     if(rand %2 ==0){
    //         resolve();
    //     }
    //     else{
    //         reject();
    //     }
    // });

    // promise
    //     .then(()=>{
    //         console.log("Pile, c'est gagné!");
    //     })
    //     .catch(()=>{
    //         console.log("Face, c'est perdu");
    //     });

// le meme exo avec promesse

// function wolfSearch(){
        
//     console.error("le loup va chercher les moutons");
    
// }
// function sheepHides(){
    
//     console.log("Les moutons se cachent...");
    
// }

// function wolfCount(){
//     return new Promise((resolve,reject)=>{
//         let count =1;
//         const MAXI =5;
//         console.warn("Le loup commence à compter");
//         const timer=setInterval(()=>{

//             console.log(count);
//             count++;
//             if(count>MAXI){
//                 clearInterval(timer);
//                 resolve();
//             }

//         }, 1000)
//     });
// }

// wolfCount()
//     .then(wolfSearch);
// sheepHides();

// avec un argument dans resolve

function wolfSearch(message){
        
    console.warn(message);
    console.error("le loup va chercher les moutons");
    
}
function sheepHides(){
    
    console.log("Les moutons se cachent...");
    
}

function wolfCount(){
    return new Promise((resolve,reject)=>{
        let count =1;
        const MAXI =5;
        console.warn("Le loup commence à compter");
        const timer=setInterval(()=>{

            console.log(count);
            count++;
            if(count>MAXI){
                clearInterval(timer);
                resolve("Le loup a terminé de compter");
            }

        }, 1000)
    });
}

wolfCount()
    .then(wolfSearch);
sheepHides();