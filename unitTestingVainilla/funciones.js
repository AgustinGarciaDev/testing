const axios = require('axios')

async function fetchearApi() {
    const respuesta = await axios.get('http://apipetshop.herokuapp.com/api/articulos')
    return respuesta.data.response
}

module.exports = fetchearApi