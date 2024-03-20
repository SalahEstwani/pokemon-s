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

//let searchBtn = document.getElementById("btn")
//searchBtn.addEventListener("click", searchPokemon)
//function searchPokemon() {
  //  let searchInput = document.getElementById("searchInput").value.toLowerCase();
    //let filteredData = data.filter(item => {item.type.toLowerCase().includes(searchInput)});
    //pokemonCard(filteredData);
    

//  function nested() {
//    for (let j = 0; j < data.length; j++) {
//        const element = data[j];
        
//        for (let d = 0; d = element.length; d++) {
//            const content = element[d];
            
//        }
//    }
//  }
    


let searchBtn = document.getElementById("btn");


searchBtn.addEventListener("click", searchPokemon);


function searchPokemon() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
  
    let filteredData = data.map(Element => {
         const listOfTypes = Element.type



         
         listOfTypes.map(type =>{
           if (type.includes(searchInput)) {
            hasMoreThanOneType = true
            break;
          
            
           }
         }
            )


            

        // return pokemon.type.some(type => {
        //    if (typeof type === 'string') { 
        //         return type.toLowerCase().includes(searchInput);
        //     }
        //     return false; 
        // });
    });

  
    pokemonCard(filteredData);
}
