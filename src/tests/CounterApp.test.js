import { shallow } from "enzyme"
import CounterApp from '../CounterApp'
describe('deberia hacer la tarea ', ()=>{
    let wraper = shallow(<CounterApp />);

    beforeEach( ()=> {
        wraper = shallow(<CounterApp />)
    })


    test(' debe de mostrar el <CounterApp /> ', () => {
        expect( wraper ).toMatchSnapshot(); 
    })


    test('debe mostrar el valor por defecto que es 100 ', () => {
        const wraper = shallow( <CounterApp value={100}/>)
        const textoCounter = wraper.find( 'h2' ).text().trim();
        //console.log(textoCounter);
        expect( textoCounter ).toBe( '100' );
    })

    test('debe de incrementar con el boton de +1 ', () => {

        const btn1 = wraper.find( 'button' ).at(0).simulate('click');      
        //console.log(btn1.html())  
        const textoCounter = wraper.find( 'h2' ).text().trim();
        expect( textoCounter ).toBe( '11' );

    })


    test('debe de disminuir con el boton de -1 ', () => {

        const btn1 = wraper.find( 'button' ).at(2).simulate('click');      
        //console.log(btn1.html())  
        const textoCounter = wraper.find( 'h2' ).text().trim();
        expect( textoCounter ).toBe( '9' );

    })
    
    test('debe de reiniciar el valor por defecto con el boton Reseat ', () => {

        const wraper = shallow( <CounterApp value={105}/>)
        const btn1 = wraper.find( 'button' ).at(0).simulate('click');
        const textoCounter = wraper.find( 'h2' ).text().trim();
        console.log(textoCounter)
        const btnReseat = wraper.find( 'button' ).at(1).simulate('click');
        const textoNuevo = wraper.find( 'h2' ).text().trim();
        console.log("este es "+ textoNuevo)
        expect( textoNuevo ).toBe( '105' )

        
    })
    
    
})