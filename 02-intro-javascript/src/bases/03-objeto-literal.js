
const persona={
    nombre: 'Tony',
    apellido:'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 43543545,
        lat: 24.3554,
        lng: 34.5435435,
    }


};

//console.table(persona);

const persona2={...persona};
persona2.nombre='Peter';

console.log( persona );
console.log( persona2 );