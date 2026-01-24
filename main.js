//Variable: espacio de memoria para almacenar información importante del programa

//Declaración:
let cliente;

//Asignación de valores:

cliente = "Ana";

cliente = "Nairut";

console.log(cliente);

//Inicialización de Variables:

let edad = 34;

console.log("edad:", edad);

let femenino = true;

console.log("femenino:", femenino)


//Constantes: Es una variable cuyo valor no puede ser modificado una vez que se asignó.

const nacimiento = 1991;

console.log("nacimiento:", nacimiento);

// Ejemplo de Operadores y Condicionales 

let calificacion = 75;

if (calificacion >= 90) {
            console.log("Excelente calificación");
    }else if (calificacion >= 70){
            console.log ("Buena Calificación");
    }else {
            console.log("Necesitas estudiar más");
    }

// Ejemplo de Operadores de comparación

    console.log (2 == '2'); //true
    
    console.log (2 === '2');  //false

    console.log (2 != '3'); //true
    
    console.log (2 !== '2');  //true

    //Ejemplos de Operadores lógicos

    console.log (true && false); // false

    console.log (true || false); // true

    console.log ( !true ); //false

    let edadCliente = 19;
    let dinero = true;

    if (edadCliente >= 18 && dinero)  {
        console.log("Puedes ingresar al bar");
    } else {
         console.log ("No puedes ingresar al bar")
    }

//Ciclos y control de flujo

//Ejemplo de ciclo for 

 for (let i = 0; i < 7 ; i++){

    console.log ('Numero: ' +i)
 }


 //Ejemplo de ciclo while

 //let i = 0;

 //while (i < 5){
    //console.log('numero: ' +i);
    //i++;
 //}

 //Ejemplo de Do  while

let i = 0;

do {
    console.log ('numero: ' +i);
    i++;
}while (i<5);

const password = "1234";

let passwordIngresado = prompt ("ingrese su contraseña");


while (passwordIngresado != password ) {
    passwordIngresado = prompt ("ingrese su contraseña");
}



//Ejemplo de For

const usuarios = [
                    {nombre:"Ana", edad:20, terminos:false},
                    {nombre:"Luis", edad:17, terminos:true},
                    {nombre:"Carlos", edad:18, terminos:true},
                    {nombre:"Maria", edad:15, terminos:true}
                ]
   
for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].edad >= 18 && usuarios[i].terminos == true){
        console.log(usuarios[i].nombre);
    }
}



