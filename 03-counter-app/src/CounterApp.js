
import React, {useState} from 'react';
import PropTypes from 'prop-types';


//FC

const CounterApp =({value=10}) => {

    const [counter, setCounter]=useState( value ); //retorna un arreglo con dos valores
    
    //handleAdd
    const handleAdd=()=>{
        setCounter( counter + 1);
        //setCounter( (c) => c + 1 );
    }

    //handleReset
    const handleReset=()=>{
        setCounter( value);
        //setCounter( (c) => c + 1 );
    }

    //handleSubtract
    const handleSubtract=()=>{
        setCounter( counter - 1);
        //setCounter( (c) => c + 1 );
    }


    return (
        <>
            <h1> CounterApp </h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )

}

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;