describe (' Esta es una prueba de demo.test.js ', () => {

    test('deben de ser iguales los string', () => {

        //1 . Inicialización
        const mensaje = "hola mundo";
    
        //2. Estímulo 
        const mensaje2 = "hola mundo";
    
        //3. Observar el comportamiento
    
        expect( mensaje ).toBe( mensaje2 ); // ===
    
    })

})

