import React, { Fragment, useState }  from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( { value =10 }) => {

  
    const [ counter, setCounter ] = useState( value ); // Retorna un []
   
    // handdleApp : Constante para imprimir el evento del teclado
    const handdleApp = () =>{
        setCounter(counter+1);
    }

    const handdleSubtract = () => {
        setCounter(counter-1);
    }

    const handdleReseat = () => {
        setCounter(value);

    }
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={handdleApp}>+1</button>
            <button onClick={handdleReseat}>Reseat</button>
            <button onClick={handdleSubtract}>-1</button>
            

        </Fragment>
    );
}


CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;

