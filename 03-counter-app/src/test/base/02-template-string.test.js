
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

desribe('Pruebas en 02-template-string.js', () => {

        test('getSaludo debe retornar hola Fernando ', () => {
           
            const nombre= 'Fernando';

            const saludo = getSaludo(nombre);

            //expect (saludo).toBe('Hola ' + nombre);

        })
        


})
