def replaceChar (string, index, character):
    '''
    Reemplaza un caracter del string ingresado basado en el índice de la posición a reemplazar y el nuevo caracter

    Parámetros
    
    string: str
    index: int
    character: str
    
    '''
    newList = list(string)
    
    if index > len(newList)-1:
        return print("El indice supera a la cantidad de caracteres del string ingresado")
    elif len(character) > 1:
        return print("La cantidad de caracteres a reemplazar tiene que ser 1")
    else:
        newList[index] = character
    
    newString = "".join(newList)
    
    return print(newString)



