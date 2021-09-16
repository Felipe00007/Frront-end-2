let usuarios = document.querySelectorAll('.usuario')

for(let i = 0; i < usuarios.length; i++){
  usuario = usuarios[i]

  let tdNome = usuario.querySelector('.info-nome')
  let nome = tdNome.textContent

  let tdEmail = usuario.querySelector('.info-email')
  let email = tdEmail.textContent

  let tdCpf = usuario.querySelector('.info-cpf')
  let cpf = tdCpf.textContent

  let tdImg = usuario.querySelector('.img')
  let img = tdImg.textContent



}


let btn1 = document.querySelector('#btnAdiciona')
btn1.addEventListener('click', function(event){
  event.preventDefault()
  let form = document.querySelector('.dados-form')
let nome = form.nome.value
let email = form.email.value
let cpf = form.cpf.value
let img = form.img.value

let usuarioTr = document.createElement('tr')
let nomeTd = document.createElement('td')
let emailTd = document.createElement('td')
let cpfTd = document.createElement('td')
let imgTd = document.createElement('img')

nomeTd.textContent = nome
emailTd.textContent = email
cpfTd.textContent = cpf
imgTd.src = img

usuarioTr.appendChild(nomeTd)
usuarioTr.appendChild(emailTd)
usuarioTr.appendChild(cpfTd)
usuarioTr.appendChild(imgTd)


let tabela = document.querySelector('#tabela-usuarios')

tabela.appendChild(usuarioTr)

})