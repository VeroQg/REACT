
import React from 'react';

import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';

const divRoot=document.querySelector('#root');

ReactDOM.render(<CounterApp value={10}/>,divRoot); //render envia dos parametros, el 1ro el elemento a visualizar y el 2do es donde aparecera
