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
    let _species = species;
    let _gender = gender;
    this.created = created;
    this.origin = origin;
    this.location = location;
    this.episode = episode;

    this.getName = () => _name;
    this.getStatus = () => _status;
    this.getSpecies = () => _species;
    this.getGender = () => _gender;
    this.setName = (nuevo_name) => (_name = nuevo_name);

    this.setStatus = (nuevo_status) => (_status = nuevo_status);
    this.setSpecies = (nuevo_species) => (_species = nuevo_species);
    this.setGender = (nuevo_gender) => (_gender = nuevo_gender);
  }

  get name() {
    return this.getName();
  }
  get status() {
    return this.getStatus();
  }
  get species() {
    return this.getSpecies();
  }
  get gender() {
    return this.getGender();
  }

  set name(nuevo_name) {
    this.setName(nuevo_name);
  }
  set status(nuevo_status) {
    this.setStatus(nuevo_status);
  }
  set species(nuevo_species) {
    this.setSpecies(nuevo_species);
  }
  set gender(nuevo_gender) {
    this.setGender(nuevo_gender);
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
  }

  getInfoGeneral() {
    return `
          <li>ID: ${this.id}</li>
          <li>Specie:${this.species}</li>`;
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

      let arrayPersonajes = [];
      getPersonaje = async () => {
        try {
          const url = `${urlBase}/character/`;
          const getPersonajes = await solicitud(url);
          const datosPersonaje = getPersonajes.results; // tengo el arreglo
          totalpersonajes = datosPersonaje.length;

          datosPersonaje.forEach(async (p) => {

            let imagen = p.image;
            let userId = p.id;
            let personaje = await getId(userId);

            name = personaje.name;
            status = personaje.status;
            species = personaje.species;
            gender = personaje.gender;
            created = personaje.created;
            origin = personaje.origin.name;
            locacion = personaje.location.name;
            episode = personaje.episode.length;

            let personajeLimpio = {
              userId, name, status, species, gender, created, origin, locacion, episode
            }
            arrayPersonajes.push(personajeLimpio);

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

            elemento = `<img id="${userId}"onclick="encontrarPersonaje(${userId})" data-toggle="modal" data-target="#exampleModal" src="${imagen}"><ul class="m-2 p-1">${detalles.getInfoGeneral()}</ul>`;
            resultados.innerHTML += elemento;

          })
        } catch (errorpersonaje) {
          console.log(`Ocurrio un error: ${errorpersonaje}`);
        }
      };
      getPersonaje();

      return arrayPersonajes;
    },

    funcionPublica2: () => {
      // debo borra el spiner y obtener el total
      let canntidadPersonajes = document.getElementById("cantidadPersonajes");
      canntidadPersonajes.innerHTML = totalpersonajes;
    },
  };
})();


function encontrarPersonaje(id) {
  console.log(arrayPersonajes);
  const persona = arrayPersonajes.find(p => p.userId == id);

  let infomodal = document.getElementsByClassName("modal-body")[0];
  let personajito = document.getElementById("personajito");
  personajito.innerHTML = persona.name;

  infomodal.innerHTML = `
    <li>ID: ${persona.userId}</li>
    <li>Nombre: ${persona.name}</li>
    <li>Género: ${persona.gender}</li>
    <li>Especie: ${persona.species}</li>
    <li>Status: ${persona.status}</li>
    <li>Creado: ${persona.created}</li>
    <li>Origen: ${persona.origin}</li>
    <li>Cantidad de Episodios: ${persona.episode}</li>`;
}

let arrayPersonajes = llamadoPersonajes.funcionPublica1();

setTimeout(() => {
  llamadoPersonajes.funcionPublica2();
  let spinner = document.getElementById("spinner");
  spinner.style.visibility = "hidden";
}, 2000);

