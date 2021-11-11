import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../datos/heroes";

describe('Pruebas en funciones de Héroes',()=>{
    test('debe de retornar un heroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);


        const heroeData = heroes.find(h => (h.id ===id));
        expect( heroe ).toEqual( heroeData )
    })
    
    test('debe de retornar undefined cuando no se encuentra el id en el arreglo ', () => {
        const id = 6;
        const heroe = getHeroeById(id);
        //console.log(heroe);

        //const heroeData = heroes.find(h => (h.id ===id));
        expect( heroe ).toBe( undefined )
    })

    //debe de retornar un arreglo con los heroes de DC
    //owner 
    //toEqual al arreglo filtrado

    test('Debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';

        //console.log(getHeroesByOwner('DC'))      
        const heroesTest = getHeroesByOwner(owner);
        const heroe =  [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];

        expect( heroesTest ).toEqual( heroe );

    
    })
    



    //debe retornar un arreglo con los heroes de Marvel 
    //length = 2 //toBe


    test('Debe retornar un arreglo con los heroes de Marvel  ', () => {
        const owner = 'Marvel';
        const heroeTest = getHeroesByOwner(owner);

        const heroe =  [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ];


        expect( heroeTest ).toEqual( heroe );
        expect( heroeTest.length ).toBe( heroe.length )
        
    })
    



})