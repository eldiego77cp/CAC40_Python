'''
string = "zootezzo"
frequency = {}
def counter(string):
    for i in string:
        if i not in frequency:
            frequency[i] = 1
            print(frequency)
        else:
            frequency[i] += 1
            print(frequency)

    return frequency

print(frequency)

sorted_frequency = (sorted(counter(string).items(), key=lambda x: x[1], reverse=True))

for i in range(3):
    print(sorted_frequency[i])
'''

def company(name):
    '''
    Imprime los caracteres más usados de forma ascendente y la cantidad de veces que se usó cada caracter.

    Parámetros

    namne = string
        
    Retorno

    completar con el retorno
    '''

name = "Codo a Codo"

# Crea un set con las letras únicas de la frase para usar con el for
newSet = set(name.replace(" ", "").lower())

# Crea una list con todas las letras de la frase, exceptuando los guiones para contar la cantidad de cada una de las letras
newList = list(name.replace(" ", "").lower())

# Crea un dict vacía para colocar la cantidad de veces que aparece una letra y dicha letra
newPairList = []

for letter in newSet:
    counter = newList.count(letter)
    if len(newPairList) == 0:
        newPairList.append(letter + " " + str(counter))
    elif:
        len(newPairList) == 1 and 

for 


print(string1[2:len(string1)])
    

print(newPairList)
print(newPairList[0])
print(newPairList[1])
print(newPairList[2])
print(newPairList[3])