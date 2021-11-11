import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Prueba en desestructuración de arr', () => {
    test('', () => {
        const [letras, numeros] = retornaArreglo();
        //expect( arr ).toEqual( ['ABC', 123])
        console.log( typeof letras);
        expect( letras ).toBe( 'ABC' )
        expect( typeof letras ).toBe( 'string' )

        expect( numeros ).toBe( 123 )
        expect( typeof numeros ).toBe( 'number' )
    })
    
})