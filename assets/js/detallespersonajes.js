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

export default DetallesPersonajes;

