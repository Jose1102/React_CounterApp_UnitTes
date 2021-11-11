import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom'


describe('prueba en <PrimeraApp />', ()=>{
    // test('debe mostrar el mensaje "Hola soy Goku"', () => {
    //     const saludo = "Hola soy Goku";
    //     const {getByText} = render( <PrimeraApp saludo="Goku"/> )
    //     expect( getByText( saludo )).toBeInTheDocument();        
    // })
    
    test('debe mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'Goku'
        const wraper = shallow( <PrimeraApp saludo={saludo}/>);
        expect( wraper ).toMatchSnapshot();

    })

    test(' debe de mostrar el subtitulo mostrado por props ', () => {

        const saludo = 'Goku';
        const subTitulo = 'Soy un subtitulo';
        const wraper = shallow( 
            <PrimeraApp 
                saludo={saludo}
                subtitulo={ subTitulo }                
            />
        );

        const textoParrafo = wraper.find( 'p' ).text();
        console.log(textoParrafo);

        expect( textoParrafo ).toBe( subTitulo);
        
    })
    
    
})