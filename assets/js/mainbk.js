class Personajes {
  constructor(id) {
    let _id = id;

    this.getId = () => _id;
    this.setId = (nuevo_id) => (_id = nuevo_id);
  }

  get id() {
    return this.getId();
  }
  set id(nuevo_id) {
    this.setId(nuevo_id);
  }
}

class DetallesPersonajes extends Personajes {
  constructor(
    id,
    name,
    status,
    species,
    gender,
    created,
    origin,
    location,
    episode
  ) {
    super(id);

    let _name = name;
    let _status = status;
    this.species = species;
    this.gender = gender;
    this.created = created;
    this.origin = origin;
    this.location = location;
    this.episode = episode;

    this.getName = () => _name;
    this.getStatus = () => _status;
    this.setName = (nuevo_name) => (_name = nuevo_name);
    this.setStatus = (nuevo_status) => (_status = nuevo_status);
  }

  get name() {
    return this.getName();
  }
  get status() {
    return this.getStatus();
  }
  set name(nuevo_name) {
    this.setName(nuevo_name);
  }
  set status(nuevo_status) {
    this.setStatus(nuevo_status);
  }
  getSpecies() {
    return this.species;
  }
  setSpecies(nuevo_species) {
    this.species = nuevo_species;
  }
  getGender() {
    return this.gender;
  }
  setGender(nuevo_gender) {
    this.gender = nuevo_gender;
  }
  getCreated() {
    return this.created;
  }
  setCreated(nuevo_created) {
    this.created = nuevo_created;
  }
  getOrigin() {
    return this.origin;
  }
  setOrigin(nuevo_origin) {
    this.origin = nuevo_origin;
  }
  getLocation() {
    return this.location;
  }
  setLocation(nuevo_location) {
    this.location = nuevo_location;
  }
  getEpisode() {
    return this.episode;
  }
  setEpisode(nuevo_episode) {
    this.episode = nuevo_episode;
  }

  getInfoModal() {
    console.log("soy infoModal");
    return `
      <li>ID: ${this.id}</li>
      <li>Nombre: ${this.name}</li>
      <li>Género: ${this.gender}</li>
      <li>Especie: ${this.getSpecies()}</li>
      <li>Status: ${this.getStatus()}</li>
      <li>Creado: ${this.getCreated()}</li>
      <li>Origen: ${this.getOrigin()}</li>
      <li>Cantidad de Episodios: ${this.getEpisode()}</li>`;
  }
  getInfoGeneral() {
    /* console.log("soy infoGeneral"); */
    /* llamadoPersonajes.funcionPublica1(this.getId());
    console.log(llamadoPersonajes.funcionPublica1(this.getId())); */
    return `
          <li>${this.id}</li>
          <li> ${this.species}</li>`;
  }
}

let llamadoPersonajes = (() => {
  // variables privadas
  let urlBase = "https://rickandmortyapi.com/api";
  let resultados = document.querySelector(".resultados");
  let resultadoApi = {};
  let totalpersonajes;

  const solicitud = async (url) => {
    try {
      const resultados = await fetch(url);
      const respuesta = await resultados.json();
      return respuesta;
    } catch (errordata) {
      console.log(`Ocurrio un error: ${errordata}`);
    }
  };

  getId = async (id) => {
    try {
      const url = `${urlBase}/character/${id}`;
      const idd = await solicitud(url);
      resultadoApi = idd;

      return resultadoApi;
    } catch (error) {
      console.log(`Ocurrio un error: ${error}`);
    }
  };

  return {
    funcionPublica1: () => {
      getPersonaje = async () => {
        try {
          const url = `${urlBase}/character/`;
          const getPersonajes = await solicitud(url);
          const datosPersonaje = getPersonajes.results; // tengo el arreglo
          totalpersonajes = datosPersonaje.length;
          let array = [];
          let contador = 0;
            let resultados = document.querySelector(".resultados");
            let total = 1;
          datosPersonaje.forEach(async (p) => {
            /*   console.log(p.id); */

            let imagen = p.image;

            let userId = p.id;
            let personaje = await getId(userId);

            /* console.log("estoy aqui ", personaje); */
            /*           console.log(personaje.name); */
            /*  i = setid(userId);
            console.log(i);
            conosle.log(getid(i)); */


            name = personaje.name;
            status = personaje.status;
            species = personaje.species;
            gender = personaje.gender;
            created = personaje.created;
            origin = personaje.origin.name;
            locacion = personaje.location.name;
            episode = personaje.episode.length;

            const detalles = new DetallesPersonajes(
              userId,
              name,
              status,
              species,
              gender,
              created,
              origin,
              locacion,
              episode
            );

            resultados.innerHTML +=`<div display="inline-block">
            <img src="${imagen}">
               <ul>${detalles.getInfoGeneral()}
              </ul>
              </div`;

         /*    array.push(`<div class="col">
            <img src="${imagen}">
               <ul>${detalles.getInfoGeneral()}
              </ul>
              </div`); */
       /*      contador++;
            if (contador==3) {
            
          console.log(resultados);     
              resultados.innerHTML += `<div class="row mx-auto text-center">
                ${array[0]}${array[1]}${array[2]}
              </div>
              `;
           
             contador = 0;
              array=[];
              console.log(total);
              if (total==18) contador=2;
            }
            
            total++;
 */
            /* 
            let info = document.getElementById("info");
            info.innerHTML += detalles.getInfoGeneral(); */
          });


/* `<div class="row text-center">${array}<div>` */

        } catch (errorpersonaje) {
          console.log(`Ocurrio un error: ${errorpersonaje}`);
        }
      };
      getPersonaje();
    },

    funcionPublica2: () => {
      // debo borra el spiner y obtener el total
      let canntidadPersonajes = document.getElementById("cantidadPersonajes");
      canntidadPersonajes.innerHTML = totalpersonajes;
    },
  };
})();

llamadoPersonajes.funcionPublica1();

setTimeout(() => {
  llamadoPersonajes.funcionPublica2();
  let spinner = document.getElementById("spinner");
  spinner.style.visibility = "hidden";
}, 2000);

/* 
const detalles = new DetallesPersonajes(
  "1",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h"
);

let infomodal = document.getElementById("info");
info.innerHTML = detalles.getInfoModal();
 */
