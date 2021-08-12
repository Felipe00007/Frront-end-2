let pedra;
let papel;
let tesoura;
let jogador = 0;
let computador = 0;
while (jogador < 3 && computador < 3){
    let valorEscolhido = prompt("Pedra, Papel ou Tesoura!");
    valorEscolhido = valorEscolhido.toLowerCase();
    let valorAleatorio = Math.random(); // retorna um numero entre 0 e 1
    let valorPC = valorAleatorio < 0.3 ? "pedra" : valorAleatorio < 0.6 ? "papel" : "tesoura"; //dividindo 1 em 3 partes para definar as opções;
    if (valorEscolhido == valorPC) {
        alert("empatou");
        continue;
    }
    switch (valorEscolhido) {
        case "pedra":
            if (valorPC == "tesoura"){
                jogador++;
                alert("ponto do jogador você marcou "+jogador)
            }else{
                computador++;
                alert("ponto do computador ele marcou "+ computador)}
            break;
        case "papel":
            if (valorPC == "pedra"){
                jogador++;
                alert("ponto do jogador você marcou "+jogador)
            }else{
                computador++;
                alert("ponto do computador ele marcou "+computador)}
            break;
        case "tesoura":
            if (valorPC == "papel"){
                jogador++;
                alert("ponto do jogador você marcou  "+jogador)
            }else{
                computador++;
                alert("ponto do computador ele marcou "+computador)}
            break;
        
    }

}

if(jogador>=3){
  alert("Você ganhou! ") 
  }else{
      alert(" Você perdeu!")
     
  }