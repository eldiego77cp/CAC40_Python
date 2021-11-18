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

date()


    

    
    
    
    
