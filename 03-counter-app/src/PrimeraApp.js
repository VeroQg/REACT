

import React from 'react';
import PropTypes from 'prop-types';

//import React, {Fragment} from 'react'

//FC

const PrimeraApp =({saludo, subtitulo}) => {

   
    //Tambien se puede asignar una constante objeto y para la impresion se usa la expresion de abajo
    /*const saludo={
        nombre:'Fernando',
        edad:34
    }*/

    return (
        <>
            <h1> {saludo} </h1>
            {/* <pre> {JSON.stringify(saludo,null,3)} </pre> */}
            <p> {subtitulo} </p>
        </>
    );

}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired  // Aqui se le indica que es obligatorio el envio del saludo
}

PrimeraApp.defaultProps={
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;