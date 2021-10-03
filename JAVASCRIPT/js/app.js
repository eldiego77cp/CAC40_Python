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
/*
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
    case 5:Fra
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
*/

/* (20) */
/*
let script;
let scriptAcumulador = "";
do {
    script = prompt("Ingrese varias frases. Presione cancelar cuando ya no quiera ingresar más", "");
    if(script === null) {break;} 
        else {scriptAcumulador += `${script}<br>`;}
} while (script !== null)
if(scriptAcumulador === "" || scriptAcumulador === null) {
    document.write(`No se ha ingresado ninguna frase`);} 
else {
    document.write(`Las frases ingresadas fueron las siguientes:<br><br> ${scriptAcumulador}`);
}
*/

/* (21) */
/*
let num;
let suma=0;
do {
    num = prompt("Ingrese varios números positivos. Presione cancelar cuando ya no quiera ingresar más", "");
    if(num === null || parseInt(num) < 0) {break;} 
        else {suma += parseInt(num);}
} while (num !== null)
if(suma === 0) {
    document.write(`No se han ingresado números`);
} 
else if(parseInt(num) < 0) {
    document.write(`Ud ha intentado introducir un número negativo. El proceso se ha cancelado <br>`);
    document.write(`La suma de los números ingresados hasta el momento, sin contar el número negativo, es la siguiente:<br><br> ${suma}`);
}
else {
    document.write(`La suma de los números ingresados es la siguiente:<br><br> ${suma}`);
}
*/

/* (22) */
/*
let num;
let resto;

while (num !== null) {
    
    do{
    num = prompt("Ingrese un número de DNI entre 0 y 99999999", "");
        if(isNaN(num) === true) {
            alert(`El valor ingresado no es un número válido. Ingrese un nuevo valor.`);
        }
    } while (isNaN(num) === true);

    resto = parseInt(num) % 23;
    switch (resto) {
        case 1:
            alert(`La letra asignada a su DNI es la R`);
            break;
        case 2:
            alert(`La letra asignada a su DNI es la W`);
            break;
        case 3:
            alert(`La letra asignada a su DNI es la A`);
            break;
        case 4:
            alert(`La letra asignada a su DNI es la G`);
            break;
        case 5:
            alert(`La letra asignada a su DNI es la M`);
            break;
        case 6:
            alert(`La letra asignada a su DNI es la Y`);
            break;
        case 7:
            alert(`La letra asignada a su DNI es la F`);
            break;
        case 8:
            alert(`La letra asignada a su DNI es la P`);
            break;
        case 9:
            alert(`La letra asignada a su DNI es la D`);
            break;
        case 10:
            alert(`La letra asignada a su DNI es la X`);
            break;
        case 11:
            alert(`La letra asignada a su DNI es la B`);
            break;
        case 12:
            alert(`La letra asignada a su DNI es la N`);
            break;
        case 13:
            alert(`La letra asignada a su DNI es la J`);
            break;
        case 14:
            alert(`La letra asignada a su DNI es la Z`);
            break;
        case 15:
            alert(`La letra asignada a su DNI es la S`);
            break;
        case 16:
            alert(`La letra asignada a su DNI es la Q`);
            break;
        case 17:
            alert(`La letra asignada a su DNI es la V`);
            break;
        case 18:
            alert(`La letra asignada a su DNI es la H`);
            break;
        case 19:
            alert(`La letra asignada a su DNI es la L`);
            break;
        case 20:
            alert(`La letra asignada a su DNI es la C`);
            break;
        case 21:
            alert(`La letra asignada a su DNI es la K`);
            break;
        case 22:
            alert(`La letra asignada a su DNI es la E`);
            break;
        default:
            if(num === null) {
                break;
            }
                else {
                    alert(`La letra asignada a su DNI es la T`);
                    break;
                }
    }
}
*/

/* (23) */
/*
for (let num = 1; num <= 30; num++) {
        str = `${num}`;
        resultado = str.repeat(num);
        document.write(`${resultado} <br>`);
}
*/

/* (24) */
/*
for (let num = prompt("Ingrese un número", ""); num >= 1; num--) {
    str = `${num}`;
    resultado = str.repeat(num);
    document.write(`${resultado} <br>`);
}
*/

/* (25) */
/*
let str = "-"

for (let num = 1; num <= 500; num++) {
    if(num % 5 === 0) {
        document.write(`${num} <br>`);
        document.write(str.repeat(40) + `<br>`);
    } else if(num % 4 === 0 && num % 9 === 0) {
        document.write(`${num} (Múltiplo de 4 y de 9) <br>`);
    } else if(num % 4 === 0) {
        document.write(`${num} (Múltiplo de 4) <br>`);
    } else if(num % 9 === 0) {
        document.write(`${num} (Múltiplo de 9) <br>`);
    } else {
        document.write(`${num} <br>`);
    }
}
*/