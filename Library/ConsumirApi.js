const API = 'https://hp-api.onrender.com/api/characters'

const traer = async() => {
    const consulta = await fetch(API)
        .then(a => a.json())
        .then(a => console.log(a))
        .catch(err => console.log(err))

    return consulta
}

export default traer