import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Prueba 02-template-string.js', ()=>{
    test('getSaludo debe retornar Hola fernando', () => {
        const nombre = 'fernando';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( "Hola fernando" )
    })
    
})

    //getSaludo debe de retornar Hola Carlos si no hay argumento en nombre 

    test('Debe retornar Hola Carlos', () => {

        const saludo = getSaludo();

        expect(saludo).toBe("Hola Carlos")
        
    })
