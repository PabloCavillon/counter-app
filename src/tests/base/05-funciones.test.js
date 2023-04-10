// toEqual verifica que tanto las caracteristicas como su valor sean iguales

import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe ('Pruebas en 05-funciones', () => {
    
    test('Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'usuario'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('Debe de retornar un objeto', () => {
        
        const nombre = 'Pablo';
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    });

});