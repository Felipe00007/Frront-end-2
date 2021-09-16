const pacientes = document.querySelectorAll('.paciente')
const nomeInput = document.getElementById("nome")
const pesoInput = document.getElementById("peso")
const alturaInput = document.getElementById("altura")
const gorduraInput = document.getElementById("gordura")

let podeAdicionar = false;


function calculaImc(peso, altura) {
    return (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(2)
}


for (const paciente of pacientes) {
    const peso = paciente.querySelector('.info-peso').textContent;
    const altura = paciente.querySelector('.info-altura').textContent;
    const imc = calculaImc(peso, altura)

    paciente.querySelector('.info-imc').textContent = imc
}

function tratarAltura(altura) {
    if (altura <=0 || peso <=0) {
        return alert('Error')
    } else{
    let alturaTratada = altura.replace(',', '.')
    let alturaNumber = parseFloat(alturaTratada)
    if (alturaNumber > 99) {
        alturaTratada = alturaNumber / 100
    }
    return alturaTratada;
}
}


function adicionarPaciente() {
    const nome = nomeInput.value
    const peso = pesoInput.value
    const altura = tratarAltura(alturaInput.value)
    const gordura = gorduraInput.value
    const imc = calculaImc(peso, altura);

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>
    <td class="info-gordura">${gordura}</td>
    <td class="info-imc">${imc}</td>`

    document.getElementById('tabela-pacientes').appendChild(tr)
}


/* Adicionando evento ao btn do forms */
document.getElementById('adicionar-paciente').addEventListener('click', (e) => {
    e.preventDefault()
    if(podeAdicionar){
        adicionarPaciente()
    }else{
        alert('Tem algo Errado')
    }
})

alturaInput.addEventListener('focusout', () => {
    let altura = parseFloat(alturaInput.value)

    if (isNaN(altura) || alturaInput.value.length == 0 ) {
        alturaInput.classList.add('campo-invalido')
        podeAdicionar = false
    } else {
        alturaInput.classList.remove('campo-invalido')
        podeAdicionar = true
    }

})

nomeInput.addEventListener('focusout', () => {
    let nome = nomeInput.value.match(/\D/g)
    console.log(nome)
    if ( nome == null || nomeInput.value.length == 0 ) {
        nomeInput.classList.add('campo-invalido')
        podeAdicionar = false;
    } else {
        nomeInput.classList.remove('campo-invalido')
        podeAdicionar = true
    }

})

pesoInput.addEventListener('focusout', () => {
    
    if (isNaN(pesoInput.value) || pesoInput.value.length == 0 ) {
        pesoInput.classList.add('campo-invalido')
        podeAdicionar = false
    } else {
        pesoInput.classList.remove('campo-invalido')
        podeAdicionar = true
    }

})