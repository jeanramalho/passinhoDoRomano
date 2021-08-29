const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inputOriginal = document.getElementById('input-original')
const crifrador = document.getElementById('cifrador')
const resultado = document.getElementById('resultado')
const range = document.getElementById('range')

const tudoMaiusculo = () => {
    const arrayDePalavras = [...inputOriginal.value.toUpperCase()]
    printChar(0, arrayDePalavras)
    
}

const printChar = (currentLetterIndex, arrayDePalavras) => {
    if(arrayDePalavras.length === currentLetterIndex) {
    return 
}
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span")
    resultado.appendChild(spanChar)
    const charSemCodificar = arrayDePalavras[currentLetterIndex]
    spanChar.innerHTML = alfabeto.includes(charSemCodificar) ?
         alfabeto[(alfabeto.indexOf(charSemCodificar)+ parseInt(range.value)) % alfabeto.length] :
         charSemCodificar
        printChar(currentLetterIndex + 1, arrayDePalavras)

}

const submit = e => {
    e.preventDefault()
    resultado.innerHTML = ''
    tudoMaiusculo()
}

crifrador.onsubmit = submit

