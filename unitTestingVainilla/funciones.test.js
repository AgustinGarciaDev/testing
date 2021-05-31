const fetchearApi = require('./funciones')

describe('Testeo la info que me manda la API', () => {
    var respuesta;

    beforeAll(async () => {
        respuesta = await fetchearApi()
    })

    test('Que la API me devuelve 15 articulos', () => {
        expect(respuesta.length).toBe(15)
    })
    
    test('Que el primer articulo es Juguete', () => {
        expect(respuesta[0].tipo).toBe('Juguete')
    })
    
    test('Que el último articulo NO es Juguete', () => {
        expect(respuesta[respuesta.length-1].tipo).not.toBe('Juguete')
    })
})