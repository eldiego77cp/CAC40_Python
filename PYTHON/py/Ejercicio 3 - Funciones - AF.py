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