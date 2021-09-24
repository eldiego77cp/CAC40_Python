/* (1) */ 
/*
alert("Hello World");
*/

/* (2) */ 
/*
document.write("Hello World");
*/

/* (3) */
/*
document.write(3+5);
*/

/* (4) */
/*
let nombreUsuario = prompt("Ingrese el nombre de usuario ", "")
document.write(`Hola ${nombreUsuario}`)
*/

/* (5) */
/*  
let nro1 = prompt("Ingrese un número ", "")
let nro2 = prompt("Ingrese otro número ", "")
document.write(Number.parseInt(nro1) + Number.parseInt(nro2))
*/

/* (6) */
/*
let nro1 = prompt("Ingrese un número ", "");
let nro2 = prompt("Ingrese otro número ", "");
if (Number.parseInt(nro1) > Number.parseInt(nro2)) {
    document.write(`El mayor número de ambos es ${nro1}`);
    }
    else {
        document.write(`El mayor número de ambos es ${nro2}`);
    } 
*/

/* (7) */
/*  
let nro1 = prompt("Ingrese un número ", "");
let nro2 = prompt("Ingrese otro número ", "");
let nro3 = prompt("Ingrese otro número ", "");
if (Number.parseInt(nro1) > Number.parseInt(nro2) && Number.parseInt(nro1) > Number.parseInt(nro3)) {
    document.write(`El mayor número de ambos es ${nro1}`);
}
else if (Number.parseInt(nro2) > Number.parseInt(nro1) && Number.parseInt(nro2) > Number.parseInt(nro3)) {
        document.write(`El mayor número de ambos es ${nro2}`);
}
else if (Number.parseInt(nro3) > Number.parseInt(nro1) && Number.parseInt(nro3) > Number.parseInt(nro2)) {
    document.write(`El mayor número de ambos es ${nro3}`);
}
*/

/* (8) */
/*  
let nro1 = prompt("Ingrese un número ", "");
if (Number.parseInt(nro1) % 2 == 0) {
document.write(`El número ${nro1} es divisible por 2`);
} 
*/

/* ( 9) */
/*
let frase = prompt("Ingrese una frase ", "");
let counter =0;
let contadorLetra = 0;
let lenghtFrase = frase.length;

for (counter; counter < lenghtFrase; counter++) {
    if (frase.substr(counter, 1) === "a") {
        contadorLetra += 1;
    }
    else{
        contadorLetra += 0;
    }
}

document.write(`La frase "${frase}" tiene ${contadorLetra} letras "a"`);
*/

/*(10)*/
/*
let frase = prompt("Ingrese una frase ", "");
let counter =0;
let vocales = "";
let consonantes ="";
let lenghtFrase = frase.length;

for (counter; counter < lenghtFrase; counter++) {
    if (frase.substr(counter, 1) === "a" || frase.substr(counter, 1) === "e" || frase.substr(counter, 1) === "i" || frase.substr(counter, 1) === "o" || frase.substr(counter, 1) === "u") {
        vocales += frase.substr(counter, 1);
    }
    else{
        consonantes += frase.substr(counter, 1);
    }
}

document.write(`La frase "${frase}" tiene las siguientes vocales: "${vocales}"`);
*/

/* (11) */
/*
let frase = prompt("Ingrese una frase ", "");
let counter =0;
let contadorLetra = 0;
let lenghtFrase = frase.length;

for (counter; counter < lenghtFrase; counter++) {
    if (frase.substr(counter, 1) === "a" || frase.substr(counter, 1) === "e" || frase.substr(counter, 1) === "i" || frase.substr(counter, 1) === "o" || frase.substr(counter, 1) === "u") {
        contadorLetra += 1;
    }
    else{
        contadorLetra += 0;
    }
}

document.write(`La frase "${frase}" tiene ${contadorLetra} vocales`);
*/