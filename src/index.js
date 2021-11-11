import React from 'react';
import reactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';




//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

//reactDom.render( <PrimeraApp saludo="Goku"/>, divRoot);

reactDom.render( <CounterApp />, divRoot);