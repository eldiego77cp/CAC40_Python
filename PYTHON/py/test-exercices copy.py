companyName = "codo a codo"
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

