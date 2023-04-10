const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas en funciones de heroes', () => {

    test('debe retornar un heroe por id', () => {

        const id = 1;
        
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('debe retornar undefined si heroe no existe ', () => {

        const id = 10;
        
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('debe retornar un arreglo con todo los heroes por owner', () => {

        const owner = 'DC';
        
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( heroe => heroe.owner === owner );

        expect(heroes).toEqual(heroesData);
    });

    test('debe retornar un arreglo con 2 heroes de marvel', () => {

        const owner = 'Marvel';
        
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });

});