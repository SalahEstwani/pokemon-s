import {data} from "./project.js"
let container = document.querySelector(".container")
function pokemonCard() {
    let content = ""
    for(let i=0; i< data.length; i++){
    content+=`<div class="card">
    <p class="pokemon-id">${data[i].id}</p>
    <p class="pokemon-name">${data[i].name}</p>
    <img class="pokemon-thumbnail" src="${data[i].thumbnail}"/>
    <p class="pokemon-type">${data[i].type}</p>
    </div>`

}
container.innerHTML=content
}
pokemonCard()
