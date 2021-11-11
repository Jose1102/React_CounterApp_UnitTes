import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones.js', ()=> {
    test('debe retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const usuario = getUser();
        expect( usuario ).toEqual( userTest );

    })
    

    //getUsuarioActivo debe retornar un objeto

    test('debe retornar un obheto de getUsuariosActivo', () => {
        

        const userTest = {
            uid: 'ABC567',
            username: 'Jose'
        };

        const user = getUsuarioActivo('Jose');

        expect( userTest ).toEqual( user );
    })
    



})