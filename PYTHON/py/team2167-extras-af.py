def replaceSpaces (string):
    '''
    Reemplaza todos los espacios por guiones medios

    Parámetros

    string: str

    Retorno

    Var newString: nuevo string

    '''
    newString = string.replace(" ", "-")

    return newString

def changeUppLow(string):
    '''
    Cambia mayúsculas por minúsuculas con un límite de 100 caracteres en el string

    Parámetros

    string = str
    
    Retorno

    Mensaje de error: si el string tiene más de 100 caracteres
    Var newString: nuevo string

    '''
    if len(string) > 100: 
        return print("El string ingresado supera los 100 caracteres.")
    else:
        newString = string.casefold()
        return newString

def replaceChar (string, index, character):
    '''
    Reemplaza un caracter del string ingresado basado en el índice de la posición a reemplazar y el nuevo caracter

    Parámetros
    
    string: str
    index: int
    character: str

    Retorno

    Mensaje de error: si el index es mayor que el largo del string
    Mensaje de error: si el largo del character es mayor que 1
    Var newString: nuevo string
    
    '''
    newList = list(string)
    
    if index > len(newList)-1:
        return print("El indice supera a la cantidad de caracteres del string ingresado")
    elif len(character) > 1:
        return print("La cantidad de caracteres a reemplazar tiene que ser 1")
    else:
        newList[index] = character
    
    newString = "".join(newList)
    
    return newString

def capitalizeNameSurname(name, surname):
    '''
    Cambia la primera letra de un string a mayúsucula

    Parámetros

    name = str
    surname: str
    
    Retorno

    Var newString: nuevo string

    '''
    newString = name.capitalize() + " " + surname.capitalize()
    return newString

def runnerUp(scores):
    '''
    Devuelve la puntuación del subcampeón dada una lista de puntuaciones

    Parámetros

    scores = list
        
    Retorno

    Var runnerUp: nuevo int
    '''

    maxScore = max(scores)

    while maxScore == max(scores):

        for rank in range(0, len(scores), 1):
            if scores[rank] == maxScore:
                scores.pop(rank)
                break

    finalist = max(scores)
    return finalist

def triangle(side):
    '''
   Imprime un triángulo de la altura del número ingresado

    Parámetros

    side = int
        
    Retorno

    triangle
    '''
    for i in range(1, side+1, 1):
        print(str(i) * i)

def company(companyName):
    '''
    Imprime los caracteres más usados de forma ascendente y la cantidad de veces que se usó cada caracter.

    Parámetros

    name = string
        
    Retorno

    Retorna los 3 primeros
    '''
    newCompanyName = companyName.replace(" ", "").lower()
    setLetters = set(newCompanyName)
    setLettersQ = set()
    listQLetters = []
    allPairsList = []
    sortedList = []

    for l in setLetters:
        setLettersQ.add(companyName.count(l))
        listQLetters.append(str(companyName.count(l)) + " " + l)

    sortedLetters = sorted(setLetters)
    sortedNumbers = sorted(setLettersQ, reverse = True)

    for number in sortedNumbers:
        for letter in sortedLetters:
            allPairsList.append(str(number) + " " + letter)

    for pair in allPairsList:
        if pair in listQLetters:
            sortedList.append(pair)

    for index in range(0, 3):
        print(sortedList[index])

