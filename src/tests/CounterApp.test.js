const {shallow} = require('enzyme');
const { default: CounterApp } = require('../CounterApp');
import React from 'react';

describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);

    })

    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto de 100', () =>{

        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');

    });

    test('Debe de incremetar con el botón de +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');

    });

    test('Debe de decremetar con el botón de -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');

    });

    test('Debe de resetear el valor con el boton reset', () => {

        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');

    });
})