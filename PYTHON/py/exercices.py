# 1) Escribe un programa muestre por pantalla “Hello World”.

print("Hello World")

#2) Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.

print(3+5)

#3) Escribe un programa que pida el nombre del usuario y escriba un texto que diga “Hola nombreUsuario”

nombreUsuario = input("Ingrese el nombre de usuario ")
print(nombreUsuario)

#4) Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

num1 = int(input("Ingrese un número "))
num2 = int(input("Ingrese otro número "))
print('El resultado de la suma de ambos números es: ' + str(num1+num2))

#5) Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

num1 = int(input("Ingrese un número "))
num2 = int(input("Ingrese otro número "))
if num1 > num2:
    print('El número ' + str(num1) + ' es mayor que el número ' + str(num2))
elif num2 > num1:
    print('El número ' + str(num2) + ' es mayor que el número ' + str(num1))
else:
    print('Ambos números son iguales')

# 6) Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

num1 = int(input("Ingrese un número "))
num2 = int(input("Ingrese otro número "))
num3 = int(input("Ingrese un último número "))

if num1 > num2 and num1 > num3:
    print('El número ' + str(num1) + ' es mayor que el número ' + str(num2) + ' y que el número ' + str(num3))
elif num2 > num1 and num2 > num3:
    print('El número ' + str(num2) + ' es mayor que el número ' + str(num1) + ' y que el número ' + str(num3))
else:
    print('El número ' + str(num3) + ' es mayor que el número ' + str(num1) + ' y que el número ' + str(num2))

# 7) Escribe un programa que pida un número y diga si es divisible por 2

num1 = int(input("Ingrese un número "))
if num1 % 2 == 0:
    print("El número " + str(num1) + " es divisible por 2")
else:
    print("El número " + str(num1) + " no es divisible por 2")

# 8) Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

num1 = int(input("Ingrese un número "))
if num1 % 2 == 0:
    print("El número " + str(num1) + " es divisible por 2")
elif num1 % 3 == 0:
    print("El número " + str(num1) + " es divisible por 3")
elif num1 % 5 == 0:
    print("El número " + str(num1) + " es divisible por 5")
elif num1 % 7 == 0:
    print("El número " + str(num1) + " es divisible por 7")
else:
    print("El número " + str(num1) + " no es divisible por 2, 3, 5 y 7")

# 9) Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

num1 = int(input("Ingrese un número "))
counter = 0
if num1 % 2 == 0:
    print("El número " + str(num1) + " es divisible por 2")
    counter += 1
if num1 % 3 == 0:
    print("El número " + str(num1) + " es divisible por 3")
    counter += 1
if num1 % 5 == 0:
    print("El número " + str(num1) + " es divisible por 5")
    counter += 1
if num1 % 7 == 0:
    print("El número " + str(num1) + " es divisible por 7")
    counter += 1
if counter == 0:
    print("El número " + str(num1) + " no es divisible por 2, 3, 5 y 7")

# 10) Escribir un programa que escriba en pantalla los divisores de un número dado

num1 = int(input("Ingrese un número "))

for divisor in range(1, num1+1, 1):
    if num1 % divisor == 0:
        print(str(num1) + " es divisible por " + str(divisor))


# 11) Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

num1 = int(input("Ingrese un número "))
counter = 0

for divisor in range(1, num1+1, 1):
    if num1 % divisor == 0:
        counter += 1

if counter ==2:
    print(str(num1) + " es un número primo")
else: 
    print(str(num1) + " no es un número primo")


# 12) Pide una nota (número). Muestra la calificación según la nota:
#  0-3: Muy deficiente
#  3-5: Insuficiente
#  5-6: Suficiente
#  6-7: Bien
#  7-9: Notable
#  9-10: Sobresaliente

num1 = int(input("Ingrese una nota "))
if num1 >=0 and num1 <3:
    print("La calificación es Muy Deficiente")
elif num1 >=3 and num1 <5:
    print("La calificación es Insuficiente")
elif num1 >=5 and num1 <6:
    print("La calificación es Suficiente")
elif num1 >=6 and num1 <7:
    print("La calificación es Bien")
elif num1 >=7 and num1 <9:
    print("La calificación es Notable")
elif num1 >=9 and num1 <=10:
    print("La calificación es Sobresaliente")
else:
    print("La nota ingresada está fuera de rango")

# 13) Realiza un programa que escriba una pirámide del 1 al 30 de la siguiente forma:
# 1
# 22
# 333
# 4444
# 55555
# 666666
# ……….

for i in range(1, 31, 1):
    print(str(i) * i)

# 14) Haz un programa que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma (suponiendo que indica 6):
# 666666
# 55555
# 4444
# 333
# 22
# 1

num1 = int(input("Ingrese un número"))
for i in range(num1, 0, -1):
    print(str(i) * i)


# 15) Crear un programa que escriba los números del 1 al 500, y que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo:
# 1
# 2
# 3
# 4 (Múltiplo de 4)
# 5
# ------------------------------------------------------------
# 6
# 7
# 8 (Múltiplo de 4)
# 9 (Múltiplo de 9)
# 10

for i in range(1, 501, 1):
    if i % 4 == 0 and i % 9 == 0 and i % 5 == 0:
        print(str(i) + " (Multiplo de 4 y 9)")
        print("-" * 30)
    elif i % 4 == 0 and i % 5 == 0:
        print(str(i) + " (Multiplo de 4)")
        print("-" * 30)
    elif i % 9 == 0 and i % 5 == 0:
        print(str(i) + " (Multiplo de 9)")
        print("-" * 30)
    elif i % 4 == 0 and i % 9 == 0:
        print(str(i) + " (Multiplo de 4 y 9)")
    elif i % 4 == 0:
        print(str(i) + " (Multiplo de 4)")
    elif i % 9 == 0:
        print(str(i) + " (Multiplo de 9)")
    elif i % 5 == 0:
        print(str(i))
        print("-" * 30)
    else:
        print(str(i))

# 1)  Desarrollar una función que reciba tres números positivos y devuelva el mayor de los tres, 
# sólo si éste es único (mayor estricto). En caso de no existir el mayor estricto 
# devolver -1. No utilizar operadores lógicos (and, or, not). Desarrollar también un programa para 
# ingresar los tres valores, invocar a la función y mostrar el máximo hallado, o un mensaje 
# informativo si éste no existe.

def mayorNumero(num1, num2, num3):
    '''Devuelve el mayor valor de 3 números siempre que sea único, de lo contrario devuelve -1'''
    lista = [num1, num2, num3]

    if lista.count(max(lista)) > 1:
        mayorValor = -1
    else:
        mayorValor = max(lista)
    
    return mayorValor

def ingresarValores():
    '''Invoca la función mayorNumero y muestra un mensaje según los valores ingresados'''
    num1 = int(input("Ingrese un número "))
    num2 = int(input("Ingrese un segundo número "))
    num3 = int(input("Ingrese un tercer número "))

    maxNumber = mayorNumero(num1, num2, num3)

    if maxNumber == -1: 
        message = "No se puede determinar el mayor valor único de los números ingresados"
    else: 
        message = "El valor máximo hallado es " + str(maxNumber)
    return print(message) 



# 2)  Desarrollar una función que reciba tres números enteros positivos y verifique si corresponden a 
# una fecha válida (día, mes, año). Devolver True o False según la fecha sea correcta o no. Realizar 
# también un programa para verificar el comportamiento de la función.

def date():
    '''Verifica si los números ingresados corresponden a una fecha válida'''
    day = input("Ingrese un número para el día")
    month = input("Ingrese un número para el mes")
    year = input("Ingrese un número para el año")

    while day.isdigit() == False or month.isdigit() == False or year.isdigit() == False or int(day) <= 0 or int(month) <= 0 or int(year) <= 0 or int(day) > 31 or int(month) > 12:
        print("Alguno de los valores ingresados no es un número o algún valor es menor o igual a 0 o el día es mayor que 31 o el mes es mayor que 12. Vuelva a ingresar los datos")
        day = input("Ingrese un número para el día")
        month = input("Ingrese un número para el mes")
        year = input("Ingrese un número para el año")
    
    # Valida si el año es bisiesto
    if int(year) % 4 == 0:
        bisieto = True
    else:
        bisiesto = False
    
    # Valida días en cada mes
    if (int(month) == 4 or int(month) == 6 or int(month) == 9 or int(month) == 11) and int(day) == 31:
        date = False
    elif bisiesto == True and int(month) == 2 and int(day) > 29:
        date = False
    elif bisiesto == False and int(month) == 2 and int(day) > 28:
        date = False
    else:
        date = True
    
    message = "La fecha " + day + "/" + month + "/" + year + " es " + str(date)
    
    return print(message)

# 3)  Un comercio de electrodomésticos necesita para su línea de cajas un programa que le indique al 
# cajero el cambio que debe entregarle al cliente. Para eso se ingresan dos números enteros, 
# correspondientes al total de la compra y al dinero recibido. Informar cuántos billetes de cada 
# denominación deben ser entregados al cliente como vuelto, de tal forma que se minimice la cantidad 
# de billetes. Considerar que existen billetes de $500, $100, $50, $20, $10, $5 y $1. Emitir un 
# mensaje de error si el dinero recibido fuera insuficiente. Ejemplo: si la compra es de $317 y se 
# abona con $500, el vuelto debe contener 1 billete de
# $100, 1 billete de $50, 1 billete de $20, 1 billete de $10 y 3 billetes de $1.




# 4)  Escribir dos funciones separadas para imprimir por pantalla los siguientes patrones de 
# asteriscos, donde la cantidad de filas se recibe como parámetro:


# 5)  Crear una función lambda que devuelva el cuadrado de un valor recibido cómo parámetro. 
# Desarrollar además un programa para verificar el comportamiento de la función.


# 6) Crear una función lambda para comprobar si un número es par o impar. Desarrollar además un 
# programa para verificar el comportamiento de la función.


# 7)  Crear una lista con los cuadrados de los números entre 1 y N (ambos incluidos), donde N se 
# ingresa desde el teclado. Luego se solicita imprimir los últimos 10 valores de la lista.


# 8)  Eliminar de una lista de palabras que se encuentren en una segunda lista. Imprimir la lista 
# original, la lista de palabras a eliminar y la lista resultante.


# 9)  Escribir una función que reciba una lista como parámetro y devuelva True si la lista está 
# ordenada en forma ascendente o False en caso contrario. Por ejemplo, ordenada([1, 2, 3]) retorna 
# True y ordenada(['b', 'a']) retorna False. Desarrollar además un programa para verificar el 
# comportamiento de la función.


# 10) Desarrollar una función que determine si una cadena de caracteres es capicúa, sin utilizar 
# cadenas auxiliares ni rebanadas. Escribir además un programa que permita verificar su 
# funcionamiento.


# 11) Leer una cadena de caracteres e imprimirla centrada en pantalla. Suponer que la misma tiene 80 
# columnas.


# 12) Escribir una función que reciba como parámetro una tupla conteniendo una fecha (día,mes,año) y 
# devuelva una cadena de caracteres con la misma fecha expresada en formato extendido. Por ejemplo, 
# para (12, 10,17) devuelve “12 de Octubre de 2017”. Escribir también un programa para verificar su 
# comportamiento.



# 13) Ingresar una frase desde el teclado y usar un conjunto para eliminar las palabras repetidas, 
# dejando un solo ejemplar de cada una. Finalmente mostrar las palabras ordenadas según su longitud.


# 14) Desarrollar una función eliminar_claves() que reciba como parámetros un diccionario y una lista 
# de claves. La función debe eliminar del diccionario todas las claves contenidas en la lista, 
# devolviendo el diccionario modificado y un valor de verdad que indique si la operación fue exitosa. 
# Desarrollar también un programa para verificar su comportamiento.


# 15) Escribir una función para eliminar una subcadena de una cadena de caracteres, a partir de una 
# posición y cantidad de caracteres dados, devolviendo la cadena resultante. Escribir también un 
# programa para verificar el comportamiento de la misma. Escribir una función utilizando rebanadas.
# 