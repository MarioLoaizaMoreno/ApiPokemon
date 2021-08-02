// url api

const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//obtener resultados de la API

const getData = (API) => {
    return fetch(API)
      .then((response) => response.json())
      .then((json) => {
        llenarDatos(json.results), paginacion(json);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

//dubujar card de personajes;

const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html = html + '<div class="col mt-5">';
        html += '<div class="card" style="width: 9rem;">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    document.getElementById("Personajes").innerHTML = html;
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