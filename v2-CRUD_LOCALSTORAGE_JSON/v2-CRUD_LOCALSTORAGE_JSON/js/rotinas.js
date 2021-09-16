document.addEventListener("onload", executarRotinas() ); //  Ao carregar a pegina vai ser excutado a Função "executarRotinas"



function executarRotinas() {  // Função executarRotinas
    
    var localStorageKeyName = 'data'; // Atribui 'data' ao localStorage

    carregarDoLocalStorage(); // chama a function que verifica se já tem algo  no local storege 

    document.querySelector("#btn-add").addEventListener('click', function () { // Espernado o click do usuario para executar a função

        // recebendo elementos digitados pelo usuario e atribui as variaveis.
        var nome = document.getElementById("nome"), 
            email = document.getElementById("email"),
            idade = document.getElementById("idade");

        // Validar se os campos estão vazios 
        if (nome.value.length === 0 || email.value.length === 0 || !parseInt(idade.value)) return;
         
        // Aritibu ao obijeto
        var usuario = {
            nome: nome.value,
            email: email.value,
            idade: idade.value
        };

        // Limpar dados para o proximo prenchimento 
        nome.value = '';
        email.value = '';
        idade.value = '';

     // Adicionar ao localStorage o objeto "usuario"
     adicionarAoLocalStorage(usuario);
    })
    // declara função com objeto parâmetro
    function adicionarAoLocalStorage(obj) {
        var usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(nomeChaveArmazemLocal); //recupera a chave 'data' do localStorage 

        // valida se existem itens no array usuarios    
        if (dadosNoLocalStorage !== null) {
            usuarios = JSON.parse(dadosNoLocalStorage); 
        }
        //captura os itens do array e converte de JSON pra JS


        //insere um objeto no array usuarios
        usuarios.push(obj);

        // insere no localStorage uma chave e um valor
        localStorage.setItem(nomeChaveArmazemLocal, JSON.stringify(usuarios));

        // executa função "carregarDoLocalStorage()"
        carregarDoLocalStorage();
    }

    function carregarDoLocalStorage() {
        // declara um array "usuarios", 
        var usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(nomeChaveArmazemLocal), //recupera a chave 'data' do localStorage
            corpoGrade = document.querySelector("#grid tbody"); //recupera o elemento '#grid tbody'

        // valida se existem itens no array usuarios     
        if (dadosNoLocalStorage !== null) {
            usuarios = JSON.parse(dadosNoLocalStorage); //captura os itens do array e converte de JSON pra JS
        }

        // esvazia o elemento tbody
        corpoGrade.innerHTML = '';

        // percorre o array 'usuarios', cria elementos com os valores do localStorage,
        // ouvindo evento para remover os objetos salvos no array usuarios no localStorage
        usuarios.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdNome = document.createElement("td"),
                tdTrampo = document.createElement("td"),
                tdIdade = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            tdNome.innerHTML = x.nome; 
            tdTrampo.innerHTML = x.email;
            tdIdade.innerHTML = x.idade;

            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                removeDoArmazemLocal(i);
            });
            // insere no html os elementos criados
            tdRemove.appendChild(btnRemove);
            
            //elementoPai.appendChild(elementoAInserir);
            tr.appendChild(tdNome);
            tr.appendChild(tdTrampo);
            tr.appendChild(tdIdade);
            tr.appendChild(tdRemove);

            corpoGrade.appendChild(tr);
        });
    }

    // função que recebe como parâmetro o índice do item que será removido do localStorage
    function removeDoArmazemLocal(index){
        var usuarios = [], // declara um array vazio
            dadosNoLocalStorage = localStorage.getItem(nomeChaveArmazemLocal);

        usuarios = JSON.parse(dadosNoLocalStorage);

        // remove do array 'usuarios', recebe como parâmetro o índice do primeiro item e o numero de itens a remover
        usuarios.splice(index, 1);

        localStorage.setItem(nomeChaveArmazemLocal, JSON.stringify(usuarios));


        carregarDoLocalStorage();
    }
}
