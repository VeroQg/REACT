

//Funciones en JS

//const saludar=function (nombre){
//    return `Hola, ${nombre}`;
//}

const saludar2=(nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3=(nombre)=> `Hola, ${nombre}`;
const saludar4=()=> `Hola Mundo`;

//console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUser=()=>({
        id: 'ABC123',
        username:'El_pappap'
});


const user=getUser();
console.log(getUser())


//Tarea
//1. Transformen a una funcion de fecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo=(nombre)=>({
        id: 'ABC123213',
        username: nombre
    });

const usuarioActivo=getUsuarioActivo('Fernando');
console.log(usuarioActivo);
