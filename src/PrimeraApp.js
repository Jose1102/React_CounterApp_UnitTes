import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// FC 
const PrimeraApp = ( {saludo , subtitulo } ) => {

    //const saludo = 'Esta es la constante del saludo';

    //console.log(props);

   

    return (
        <Fragment>
            <h1>{ "Hola soy "+saludo }</h1>
            <p>{ subtitulo }</p>

        </Fragment>
        
        
    );



}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired 

}

PrimeraApp.defaultProps = {
    subtitulo : 'Este es un subtitulo'
}



export default PrimeraApp;