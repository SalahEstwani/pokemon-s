import {data} from "./project.js"
let container = document.querySelector(".container")
function pokemonCard() {
    let content = "";
    for (let i = 0; i < data.length; i++) {
        content += `<div class="card">
            <div class="id-container">
                <p class="pokemon-id">${data[i].id}</p>
            </div>
            <div class="name-container">
                <p class="pokemon-name">${data[i].name}</p>
            </div>
                <img class="pokemon-thumbnail" src="${data[i].thumbnail}" />
            <div class="type-container">
                <p class="pokemon-type">${data[i].type}</p>
            </div>
        </div>`;
    }
    container.innerHTML = content;
}

pokemonCard()


function searchPokemon() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filteredData = data.filter(pokemon => pokemon.type.toLowerCase().includes(searchInput));
    pokemonCard(filteredData);
}

