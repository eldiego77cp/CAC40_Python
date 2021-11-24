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