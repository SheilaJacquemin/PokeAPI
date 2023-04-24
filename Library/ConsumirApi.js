const API = 'https://pokeapi.co/api/v2/pokemon/'

function traerPokemon(id) {
    const url = `${API}${id}`
    return fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
        return datos;
        })
        .catch(error => {
        console.error( 'Se produjo un error: ', error); 
        });
};

export default traerPokemon