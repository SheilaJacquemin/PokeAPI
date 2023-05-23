const API = 'https://hp-api.onrender.com/api/characters/?limit=20';

const traer = async() => {
  const respuesta = await fetch(API);
  const personajes = await respuesta.json();
  const nombresEImagenes = personajes.map((personaje) => {
      return {
          nombre: personaje.name,
          imagen: personaje.image
        };
    });
  return nombresEImagenes;
};

export default traer;