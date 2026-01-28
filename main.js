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
/*
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



*/


//ACTIVIDAD

//Usando el ciclo for 


/*
let numeroVeces = parseInt(prompt("Cuantas veces quieres que se repita el mensaje 'Hola!'?"));

for ( let i = 1; i <= numeroVeces; i++){

    console.log("Hola!");
}
*/

//Usando ciclo While


/*
let texto = prompt("Introduce un texto (o presiona 'ESC' para salir):");
let resultado = " ";

while (texto !== "ESC"){ 
    resultado += texto + " ";
                console.log(resultado);
    texto = prompt("Escribe o otro texto (o presiona 'ESC' para salir):");
}
*/


let edadUsuario = null;
let nombre = "Carlos";

if (edadUsuario !== null && edadUsuario !== undefined) {
  console.log(`Tienes ${edadUsuario} años`);
} else {
  if (nombre) {
    console.log(`Bienvenido, ${nombre}`);
  } else {
    console.log("Información incompleta"); 
  }
}


/*

let cantidad = Number(prompt("¿Cuántas veces quieres repetir el mensaje 'Hola'?"));

if (!isNaN(cantidad) && cantidad > 0) {
    for (let i = 1; i <= cantidad; i++) {
        console.log("Repetición " + i + ": Hola");
    }
} else {
    console.log("Debes ingresar un número válido mayor que 0.");
}

*/

let texto = prompt("Ingresa un texto (escribe ESC para salir):");

while (texto !== "ESC") {  

    // Condicional: evaluar longitud del texto
    if (texto.length > 5) {
        console.log("El texto '" + texto + "' tiene más de 5 caracteres.");
    } else {
        console.log("El texto '" + texto + "' tiene 5 caracteres o menos.");
    }

    // Pedir nuevamente
    texto = prompt("Ingresa otro texto (escribe ESC para salir):");
}

console.log("Programa finalizado."); 
