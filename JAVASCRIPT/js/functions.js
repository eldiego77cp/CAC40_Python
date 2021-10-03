function repiteNvecesFrase (num) {
    str = `Bienvenidos al curso Full Stack <br>`;
    frase = str.repeat(num);
    document.write(frase);
}

// repiteNvecesFrase(parseInt(prompt(`Ingrese la cantidad de veces que quisiera repetir una frase`)));

function repiteNvecesFraseFor (num) {
    str = `Bienvenidos al curso Full Stack`;
    for(let i = 1; i <= num; i++) {
        document.write(`${i} ${str}, frase ${i} <br>`);
    }
}

// repiteNvecesFraseFor(parseInt(prompt(`Ingrese la cantidad de veces que quisiera repetir una frase`)));

function maximo (num1, num2) {
    if(num1 > num2) {
        document.write(`El valor máximo ingresado es ${num1}`);
    } else {
        document.write(`El valor máximo ingresado es ${num2}`)
    }
}

// maximo (2340, 123908);

function promedio3 (num1, num2, num3) {
    promedio = (num1 + num2 + num3)/3
        document.write(`El promedio de los 3 valores ingresados es ${promedio}`)
}

// promedio3(4, 6, 8);

function leerNotas () {
    let cantidadNotas = 0;
    let sumaNotas = 0;
    let valor;
    let promedio;

    do{ 
        valor = prompt(`Ingrese una nota del 0 al 10. Si no quiere ingresar más notas, ingrese un valor fuera de rango o cancelar`, "");
        if(parseInt(valor) <= -1  || parseInt(valor) >= 11 || valor === null ) {
            promedio = sumaNotas / cantidadNotas;
        } else {
            cantidadNotas += 1;
            sumaNotas += parseInt(valor);
        }
    } while (parseInt(valor) >= 0 && parseInt(valor) <= 10);

    if(cantidadNotas === 0){
        document.write(`No ha ingresado ningún valor o el valor ingresado está fuera del rango permitido. El proceso se ha cancelado`);
    } 
    else {
        document.write(`El promedio de las ${cantidadNotas} notas ingresadas es: ${promedio}`);
    }
}

// leerNotas();

function siguiente (valor) {

    var next;

    next = parseInt(valor) + 1;
    document.write(`El valor siguiente a ${valor} es: ${next} <br>`);
        return next;
}

// siguiente ();

function doble (valor) {

    var double;
    double = parseInt(valor) * 2;
    document.write(`El doble de ${valor} es: ${double} <br>`);
    return double;
    
}

// doble();

function cuadrado (valor) {

    var square;
    square = parseInt(valor) ** 2;
    document.write(`El cuadrado de ${valor} es: ${square} <br>`);
    return square;
}

// cuadrado();

function imprimirValores (valor) {
    siguiente(valor);
    doble(valor);
    cuadrado(valor);    
}    

// imprimirValores (10);

function tablaMultiplicar (tabla) {
    tabla = parseInt(prompt(`Ingrese el número de la tabla de multiplicar que quisiera ver`));
    document.write(`Tabla del ${tabla} <br><br>`);
    
    for (let i = 0; i <= 10; i++) {
        document.write(`${tabla} x ${i} = ${tabla * i}  <br>`);
    }
}

// tablaMultiplicar();

function imprimirElDobleDelSiguiente (valor) {
    doble(siguiente(valor));
}    

//imprimirElDobleDelSiguiente (5);

function imprimirElDobleDelSiguienteAlCuadrado (valor) {
    cuadrado(doble(siguiente(valor)));
}    

//imprimirElDobleDelSiguienteAlCuadrado (5);

function perimetroCuadrado (lado) {
    perCuadrado = lado * 4;
    document.write(`El perímetro de un cuadrado de ${lado} de lado es ${perCuadrado}`)
}

//perimetroCuadrado (5);

function superficieCuadrado (lado) {
    supCuadrado = lado ** 2;
    document.write(`La superficie de un cuadrado de ${lado} (unidad de medida) de lado es de ${supCuadrado} (unidad de medida al cuadrado) `)
}

//superficieCuadrado (5);

function perimetroCirculo (radio) {
    perCirculo = 2 * Math.PI * radio;
    document.write(`El perímetro de un círculo de ${radio} de radio es ${perCirculo} <br>`)
}

//perimetroCirculo (8);

function areaCirculo (radio) {
    arCirculo = Math.PI * radio ** 2;
    document.write(`El área de un círculo de ${radio} (unidad de medida) de radio es de ${arCirculo} (unidad de medida al cuadrado) <br>`)
}

//areaCirculo (5);

function diasMes (mes) {

    if(mes === undefined || mes < 1 || mes > 12) {
        document.write (`El número ingresado no se corresponde a un mes del calendario`);
        }
    else {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.write(`El mes ${mes} tiene 31 días`);
                break;
            case 4:
            case 6:
            case 9:
            case 1:
                document.write(`El mes ${mes} tiene 30 días`);
                break;
            default:
                document.write(`El mes ${mes} tiene 28 días`);
                break;
        }
    }
}

//diasMes(8);

function añoBisiesto (año) {

    if(año % 4 === 0) {
        document.write(`El año ${año} es un año bisiesto`)
    }
    else {
        document.write(`El año ${año} no es un año bisiesto`)
    }
}

//añoBisiesto(2024);

function diasMesFecha (dia, mes, año) {
    if(año % 4 === 0 && mes === 2) {
        document.write(`El mes ${mes} del año ${año} tiene 29 días`);
    }
    else if (año % 4 !== 0 && mes === 2) {
        document.write(`El mes ${mes} del año ${año} tiene 28 días`);
    }
    else {
        switch (mes) {
            case 4:
            case 6:
            case 9:
            case 11:
                document.write(`El mes ${mes} del año ${año} tiene 30 días`);
                break;
            default:
                document.write(`El mes ${mes} del año ${año} tiene 31 días`);
                break;
        }       
    }
}

//diasMesFecha (16, 8, 2024)

function diaAnterior (dia, mes, año) {
    var fecha = new Date(año, mes-1, dia);
    var diaAnt = new Date(año, mes-1, dia-1);
    document.write(`El día anterior al ${fecha.toLocaleDateString("es-ES")} ingresado fue ${diaAnt.toLocaleDateString("es-ES")} <br>`)        
}

//diaAnterior (1, 3, 2020);

function ultimoDiaDelMes (dia, mes, año) {
    if(año % 4 === 0 && mes ===2) {
        document.write(`El último día del mes ${mes} del año ${año} es 29`);
    } 
    else if (año % 4 !== 0 && mes ===2) {
        document.write(`El último día del mes ${mes} del año ${año} es 28`);
    }
    else {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.write(`El úiltimo día del mes ${mes} del año ${año} es 31`);
                break;
            default:
                document.write(`El úiltimo día del mes ${mes} del año ${año} es 30`);
                break;
        }       
    }
}

//ultimoDiaDelMes (29, 2, 2020)
