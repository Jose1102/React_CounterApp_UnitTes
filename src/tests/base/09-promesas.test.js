import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../datos/heroes";

describe('Pruebas con promesas', ()=>{
    test('Debe retornar un Héroe async ', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe=> {
                expect( heroe ).toBe(heroes[0]);
                done();
            })
    })

    test('Debe obtener un error si heroe por id no existe ', (done) => {

        const id = 16;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' )
                done(); 

            }); 
        
    });
    
    

})