import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {

    test('getSaludo debe retornar "Hola Pablo!"', () => {

        const nombre = 'Pablo';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre + '!');
    });

    // getSaludo debe de regresar Hola Carlos! si no hay argumento en el nombre
    
    test('getSaludo debe retornar "Hola Carlos!" si no hay argumentos', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos!');
    });

});