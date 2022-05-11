const nbre = document.querySelector("#nbrepara");
const style = document.querySelector("#style");
const btn = document.querySelector("button");
const container = document.querySelector(".container");

console.log(nbre);
btn.addEventListener("click", onclick)

function onclick(){
    console.log(nbre.value);
    const radio = document.querySelector('input[name="debut"]:checked');
    console.log(radio.value);
    fetch(`https://baconipsum.com/api/?type=${style.value}&paras=${nbre.value}&start-with-lorem=${radio.value}`)
        .then(response => response.json())
        .then(myJson => {
            console.log(myJson);
            container.innerHTML = "";
            for(let para of myJson){
                container.innerHTML += `
                    <p>${para}</p>
                `
            }


        })
}