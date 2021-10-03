// 19
/*
const AEDAD = new Array(23, 25, 33, 18, 56, 44, 56, 28, 36, 68, 63, 23, 65, 37, 39, 46, 55);

index = 0;

while (index < AEDAD.length) {
    document.write(`${AEDAD[index]} <br>`);
    index++;    
}
*/

// 20
/*
const AEDAD = new Array(23, 25, 33, 18, 56, 44, 56, 28, 36, 68, 63, 23, 65, 37, 39, 46, 55);

index = 0;

while (index < AEDAD.length) {
    if(parseInt(AEDAD[index]) % 2 === 0) {
    document.write(`${AEDAD[index]} <br>`);
    index++;
    }
    else {
        index++;    
    }    
}


//const AEDAD = new Array(23, 25, 33, 18, 56, 44, 56, 28, 36, 68, 63, 23, 65, 37, 39, 46, 55);
const AEDAD = new Array(33,68,67,62,23,18,45,48,63,50,17,24,27,19,33,45,28,33,23,21,69,71);

index = 0;

for (index = 0; index < AEDAD.length; index++) {
    if(parseInt(AEDAD[index]) % 2 === 0) {
    document.write(`${AEDAD[index]} <br>`);
    }
}
*/

// 21

function numeroMasBajo () {
    aInput = [];
    let valor;
    let nroValor;
    let numeroMenor; 

    do {
        valor = prompt(`Ingrese una serie de números`, "");
        nroValor = Number(valor);
        
        if(valor !== null) {
            aInput.push(nroValor);
        }
    } while (valor !== null);

    for (let index = 0; index < aInput.length; index++) {
        if(numeroMenor === undefined) {
            numeroMenor = aInput[0];
        }
        else if (numeroMenor > aInput[index]) {
            numeroMenor = aInput[index];
        } 
        else {
            numeroMenor += 0;
        }
    }
    document.write(`El array ingresado es el sieguiente: ${aInput} <br>`);
    document.write(`El número más bajo del array ingresado es ${numeroMenor} <br>`);
}

//numeroMasBajo();

function numeroMasAlto () {
    aInput = [];
    let valor;
    let nroValor;
    let numeroMayor; 

    do {
        valor = prompt(`Ingrese una serie de números`, "");
        nroValor = Number(valor);
        
        if(valor !== null) {
            aInput.push(nroValor);
        }
    } while (valor !== null);

    for (let index = 0; index < aInput.length; index++) {
        if(numeroMayor === undefined) {
            numeroMayor = aInput[0];
        }
        else if (numeroMayor < aInput[index]) {
            numeroMenor = aInput[index];
        } 
        else {
            numeroMayor += 0;
        }
    }
    document.write(`El array ingresado es el siguiente: ${aInput} <br>`);
    document.write(`El número más alto del array ingresado es ${numeroMenor} <br>`);
}


numeroMasAlto();