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
        vocales += frase.substr(counter, 1) + " ";
    }
    else{
        consonantes += frase.substr(counter, 1) + " ";
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

/* (12) */
/*
let frase = prompt("Ingrese una frase ", "");
let counter =0;
let contadorLetraA = 0;
let contadorLetraE = 0;
let contadorLetraI = 0;
let contadorLetraO = 0;
let contadorLetraU = 0;
let lenghtFrase = frase.length;

for (counter; counter < lenghtFrase; counter++) {
    if (frase.substr(counter, 1) === "a")  {
        contadorLetraA += 1;
    }
    else if (frase.substr(counter, 1) === "e") {
        contadorLetraE += 1;
        } 
    else if (frase.substr(counter, 1) === "i") {
        contadorLetraI += 1;
        } 
    else if (frase.substr(counter, 1) === "o") {
        contadorLetraO += 1;
        } 
    else if (frase.substr(counter, 1) === "u") {
        contadorLetraU += 1;
        } 
    }
    
document.write(`<h1>La frase "${frase}" tiene: <br><br> ${contadorLetraA} vocales "a" <br> ${contadorLetraE} vocales "e" <br>
    ${contadorLetraI} vocales "i" <br> ${contadorLetraO} vocales "o" <br> ${contadorLetraU} vocales "u" <br> </h1>`);
/*

/* (13) */
/*
let numero = parseInt(prompt("Ingrese una número ", ""));
if(numero%2 === 0) {
    document.write(`El número ${numero} es divisible por 2`);    
}
    else if(numero%3 === 0) {
        document.write(`El número ${numero} es divisible por 3`);
    }
    else if(numero%5 === 0) {
        document.write(`El número ${numero} es divisible por 5`);
    }
    else if(numero%7 === 0) {
        document.write(`El número ${numero} es divisible por 7`);
    }
    else {
        document.write(`El número ${numero} no es divisible por 2 ni por 3 ni por 5 ni por 7`);
    }
*/

/* (14) */
/*
let numero = parseInt(prompt("Ingrese una número ", ""));
if(numero%2 === 0) {
    document.write(`El número ${numero} es divisible por 2 <br>`);}
if(numero%3 === 0) {
    document.write(`El número ${numero} es divisible por 3 <br>`);}
if(numero%5 === 0) {
    document.write(`El número ${numero} es divisible por 5 <br>`);}
if(numero%7 === 0) {
    document.write(`El número ${numero} es divisible por 7 <br>`);}
*/

/* (15) */
/*
let numero = parseInt(prompt("Ingrese una número ", ""));
let counter = 2;
let divisoresNumero = "";
for (counter; counter < 11; counter++) {
        if(numero%counter === 0)  {
            divisoresNumero += `${counter} `
        }
}
if(divisoresNumero === "") {
    document.write(`El valor ${numero}, ingresado oportunamente, no es divisible por ningún número`);
}
else {
    document.write(`El valor ${numero}, ingresado oportunamente, es divisible por los siguientes números: ${divisoresNumero}`);
}
*/

/* (16) */
/*
let num1 = parseInt(prompt("Ingrese un primer número ", ""));
let num2 = parseInt(prompt("Ingrese un segundo número ", ""));
let counter = 2;
let divisoresNumero1 = "";
let divisoresNumero2 = "";
for (counter; counter < 11; counter++) {
        if(num1%counter === 0)  {
            divisoresNumero1 += `${counter} `
        }
}
if(divisoresNumero1 === "") {
    document.write(`El valor ${num1}, ingresado oportunamente, no es divisible por ningún número <br>`);
}
else {
    document.write(`El valor ${num1}, ingresado oportunamente, es divisible por los siguientes números: ${divisoresNumero1} <br>`);
}
counter = 2;
for (counter; counter < 11; counter++) {
    if(num2%counter === 0)  {
        divisoresNumero2 += `${counter} `
    }
}
if(divisoresNumero2 === "") {
    document.write(`El valor ${num2}, ingresado oportunamente, no es divisible por ningún número`);
}
else {
    document.write(`El valor ${num2}, ingresado oportunamente, es divisible por los siguientes números: ${divisoresNumero2}`);
}
*/

/* (17) */




/* (18) */
/*
let edad = parseInt(prompt("Ingrese su edad ", ""));
if(edad >= 18) {
    document.write(`Ud. es mayor de 18 años y puede conducir`);
}
else{
    document.write(`Ud. es menor de 18 años y no puede conducir`);
}
*/

/* (19) */


let nota = parseInt(prompt("Ingrese una nota ", ""));
switch (nota) {
    case 10:
    case 9:        
        document.write(`Sobresaliente`);
        break;
    case 8:
    case 7: 
        document.write(`Notable`);
        break;
    case 6:
        document.write(`Bien`);
        break;
    case 5:
        document.write(`Suficiente`);
        break;
    case 4:
    case 3:
        document.write(`Insuficiente`);
        break;
    case 2:
    case 1:
    case 0:
        document.write(`Muy Deficiente`);
        break;
    default:
        document.write(`La nota no es válida`);
        break;
}










