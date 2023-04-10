const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un Héroe async', (done) => {
        
        const id = 1;
        
        getHeroeByIdAsync(id)
            .then(heroe => {
        
                expect(heroe).toBe(heroes[0])
                done();
        
            }) ;
    });

    test('getHeroeByIdAsync deb obtener un error si el heroe no existe', (done) => {
        
        const id = 10;
        
        getHeroeByIdAsync(id)
            .catch(err => {        
                
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
})