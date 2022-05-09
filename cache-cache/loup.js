const MAX = 5;
let myInterval;
let x=0;


// function wolfCount(param1){
//     console.warn("le loup commence à compter")
//     myInterval = setInterval(()=>{
        
//         x++;
//         console.log(x);
//         if(x==MAX){
//             clearInterval(myInterval);
//             param1();
//         }    
        
        
//     }, 2000);
// }

function sheepHides(){
    
    console.log("Les moutons se cachent...");
    
}

function wolfSearch(){
        
    console.error("le loup va chercher les moutons");
    
}

// wolfCount(wolfSearch);
// sheepHides();

//COrrection

const MAXI = 5;

function wolfCount(onCountEnd) //onCountEnd est une fonction callback
{
    let count =1;
    console.warn("Le loup commence à compter");
    const timer=setInterval(()=>{

        console.log(count);
        count++;
        if(count>MAXI){
            clearInterval(timer);
            onCountEnd();
        }

    }, 1000)
}

wolfCount(wolfSearch);
sheepHides();


