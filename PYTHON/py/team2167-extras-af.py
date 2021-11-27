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

    Retorna las 3 primeros letras que tienen mayor número de ocurrencias ordenado por cantidad de letras (descendente) y, en caso que haya 2 letras o más 
    con igual cantidad de ocurrencias, las letras se ordenan de formas ascendente
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

class Matrix:
    '''
    Representa una matriz de 3x3 dimensiones. Contiene 3 métodos que permiten las operaciones matematicas de suma y resta entre matrices y la multiplicación solo por un vector.

    Parámetros
    
    m1: matriz 1 de 3 x 3 (Definir una variable con numpy para hacer la matriz aleatoria. Ejemplo: m1 = np.random.randint(10, size=(3,3)) )
    m2: matriz 2 de 3 x 3 (Definir una variable con numpy para hacer la matriz aleatoria. Ejemplo: m2 = np.random.randint(10, size=(3,3)) )
    m3: matriz 3 de 3 x 3 (Definir una variable m3 = m1 o m3 = m2 para uilizar las matrices definidas oportunamente o crear una 3ra matriz de 3 x 3. Ejemplo: m3 = np.random.randint(10, size=(3,3)) )
    v: vector de 3 x 1 (Definir una variable con numpy para hacer la matriz aleatoria. Ejemplo: m2 = np.random.randint(10, size=(3,1)) )

    '''
    def __init__(self, m1, m2, m3, v):
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3
        self.v = v

    def add(self):
        return self.m1 + self.m2

    def subs(self):
        return self.m1 - self.m2
    
    def prod (self):
        return self.m3 * self.v