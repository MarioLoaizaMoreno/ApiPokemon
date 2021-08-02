// url api

const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//obtener resultados de la API

const getData = (API) => {
    return fetch(API)
      .then((response) => response.json())
      .then((json) => {
        pokeData(json.results), paginacion(json);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  //const pokedata

  const pokeData = (data) =>{
    let html = "";
    document.getElementById("Personajes").innerHTML = "";
    data.forEach((pj) => {
      const URL = pj.url;
      return fetch(URL)
       .then((response) => response.json())
       .then((json) => {
          llenarDatos(json, html);
       })
       .catch((error) => {
        console.log("Error: ", error);
      });
    });
  };

//dubujar card de personajes;

const llenarDatos = (data, html) => {
  console.log(data);
    
      html = html + '<div class="col mt-5">';
      html += '<div class="card" style="width: 9rem;">';
      html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">`;
      html += '<div class="card-body">';
      html += `<h5 class="card-title">${data.name}</h5>`;
      html += `<p class="card-text">${data.weight}</p>`;
      html += `<p class="card-text">${data.height}</p>`;
      html += '</div>';
      html += '</div>';
      html += '</div>';
    
    document.getElementById("Personajes").innerHTML += html;
};

// paginacion

const paginacion = (data) => {
    let previousDisabled = "";
    let nextDisabled = "";


    data.previous == null ? previousDisabled = "disabled" : previousDisabled = "";
    data.next == null ? nextDisabled = "disabled" : nextDisabled = "";

    let html = `<li class="page-item ${previousDisabled}"> <a class = "page-link" onclick="getData('${data.previous}')" >previous</a></li> <li class="page-item ${nextDisabled}"> <a class = "page-link" onclick="getData('${data.next}')" >next</a></li`;
    

    document.getElementById("paginacion").innerHTML = html;
};



// se ejecuta la API

getData(API);