const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inputOriginal = document.getElementById('input-original')
const inputOriginalBase = document.getElementById('input-original-Base64')
const cifrador = document.getElementById('cifrador')
const cifradorBase = document.getElementById('cifradorBase64')
const resultado = document.getElementById('resultado')
var resultadoBase = document.getElementById('resultadoBase64')
const range = document.getElementById('range')
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
var btn = document.getElementById('codOuDecod')
var btnBase = document.getElementById('codOuDecodBase')

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
        btn.textContent = 'CODIFICAR'
    }
})
decod.addEventListener('change', (e) => {
    if (decod.checked == true){
        cod.checked = false
        btn.textContent = 'DECODIFICAR'
    }
})




//mostra o resultado com base na escolha codificar e decodificar
cifrador.addEventListener('submit', (e) => {
    if(cod.checked == true) {
        toCifra(inputOriginal.value, +range.value)
       
        
    } else if (decod.checked == true) {
        toNormal(inputOriginal.value, +range.value)
    }
})

//função para codificar o texto
function toCifra(lC, num){
    var coded = ""
    let asc
    let msg = lC.toLowerCase()
    for (i=0; i<msg.length; i++){
        if (msg[i] == " ")
        coded += " "
        else {
            if (msg.charCodeAt(i)+num>122)
            asc = msg.charCodeAt(i)+num-26
            else
            asc = msg.charCodeAt(i)+num
            coded += String.fromCharCode(asc)
        }
    }
return resultado.value = coded
}

//função para decodificar o texto
function toNormal(lC, num){
    var decoded = ""
    let letra
    let msg = lC.toLowerCase()
    for (i=0; i<msg.length; i++){
        if (msg[i] == " ")
        decoded += " "
        else {
            if (msg.charCodeAt(i)-num<97)
            letra = msg.charCodeAt(i)-num+26
            else
            letra = msg.charCodeAt(i)-num
            decoded += String.fromCharCode(letra)
        }
    }
return resultado.value = decoded
}


//previne comportamento padrão do submit
const submit = e => {
    e.preventDefault()
    resultado.innerHTML = ''
}
cifrador.onsubmit = submit



//codigo base 64


//(base64) - determinar se codifica ou decodifica
codBase.addEventListener('change', (e) => {
    if (codBase.checked == true) {
        decodBase.checked = false
        btnBase.textContent = 'CODIFICAR'
    }
})
decodBase.addEventListener('change', (e) => {
    if (decodBase.checked == true){
        codBase.checked = false
        btnBase.textContent = 'DECODIFICAR'
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
