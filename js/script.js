const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inputOriginal = document.getElementById('input-original')
const inputOriginalBase = document.getElementById('input-original-Base64')
const crifrador = document.getElementById('cifrador')
const cifradorBase = document.getElementById('cifradorBase64')
const resultado = document.getElementById('resultado')
var resultadoBase = document.getElementById('resultadoBase64')
var range = document.getElementById('range')
const cod = document.getElementById('codificar')
const decod = document.getElementById('decodificar')
var cifraCesar = document.getElementById('cifraCesar')
var base64 = document.getElementById('base64')
var codBase = document.getElementById('codificarBase')
var decodBase = document.getElementById('decodificarBase')
var cesar = document.getElementById('cesar')
var base = document.getElementById('base')
var deslocamento = document.getElementById('desloca')
var texto = inputOriginalBase.value

//determinar escolha do criptador
cifraCesar.addEventListener('click', function () {
    cesar.style.display = 'grid'  
    base.style.display = 'none'    
})
base64.addEventListener('click', function () {
    cesar.style.display = 'none'
    base.style.display = 'grid' 
})

//(cifra de cesar) - determinar se codifica ou decodifica
cod.addEventListener('change', (e) => {
    if (cod.checked == true) {
        decod.checked = false
    }
})
decod.addEventListener('change', (e) => {
    if (decod.checked == true){
        cod.checked = false
    }
})


// transforma o range em numero
var novoRange = parseInt(range.value)

//transforma tudo em maiusculo
const tudoMaiusculo = () => {
    const arrayDePalavras = [...inputOriginal.value.toUpperCase()]
    printChar(0, arrayDePalavras)    
}

//escreve no campo o resultado de acordo com a escolha de codificar e decodificar
const printChar = (currentLetterIndex, arrayDePalavras) => {
    if(arrayDePalavras.length === currentLetterIndex) {
    return 
}
if(cod.checked == true) {
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span")
    resultado.appendChild(spanChar)
    const charSemCodificar = arrayDePalavras[currentLetterIndex]
    spanChar.innerHTML = alfabeto.includes(charSemCodificar) ?
    alfabeto[(alfabeto.indexOf(charSemCodificar)+ parseInt(range.value)) % alfabeto.length] : 
    charSemCodificar    
    printChar(currentLetterIndex + 1, arrayDePalavras)
} else if (decod.checked == true) {
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span")
    resultado.appendChild(spanChar)
    const charSemCodificar = arrayDePalavras[currentLetterIndex]
    spanChar.innerHTML = alfabeto.includes(charSemCodificar) ?
    alfabeto[(alfabeto.indexOf(charSemCodificar)- parseInt(range.value)) % alfabeto.length] : 
    charSemCodificar    
    printChar(currentLetterIndex + 1, arrayDePalavras)
}
}

//previne comportamento padrão do submit
const submit = e => {
    e.preventDefault()
    resultado.innerHTML = ''
    tudoMaiusculo()
}
crifrador.onsubmit = submit



//codigo base 64


//(base64) - determinar se codifica ou decodifica
codBase.addEventListener('change', (e) => {
    if (codBase.checked == true) {
        decodBase.checked = false
    }
})
decodBase.addEventListener('change', (e) => {
    if (decodBase.checked == true){
        codBase.checked = false
    }
})

//codifica ou decodifica o texto de acordo com a escolha marcada
cifradorBase.addEventListener('submit', (e) => {
    if(codBase.checked == true) {
        resultadoBase.innerHTML = btoa(inputOriginalBase.value)
    } else if(decodBase.checked == true) {
        resultadoBase.innerHTML = atob(inputOriginalBase.value)
    }
})

//previne comportamento padrão do submit
const submitBase = e => {
    e.preventDefault()
    resultado.innerHTML = ''
}
cifradorBase.onsubmit = submit
