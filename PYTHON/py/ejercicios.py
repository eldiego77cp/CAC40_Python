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
# 13) Realiza un programa que escriba una pirámide del 1 al 30 de la siguiente forma:
# 1
# 22
# 333
# 4444
# 55555
# 666666
# ……….
# 14) Haz un programa que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma (suponiendo que indica 6):
# 666666
# 55555
# 4444
# 333
# 22
# 1
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
