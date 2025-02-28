//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomeAmigos = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if(!nomeAmigo){
        alert("Digite o nome do amigo");
        return;
    }

    listaNomeAmigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista(){
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = "";

    listaNomeAmigos.forEach(function(nomeAmigo) {
        let item = document.createElement("li");
        item.textContent = nomeAmigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo(){
    if(listaNomeAmigos.length === 0){
        alert("Nenhum amigo adicionado");
        return;
    }

    let sorteado = listaNomeAmigos[Math.floor(Math.random() * listaNomeAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("lista-amigos");
    limparLista.innerHTML = "";
    listaNomeAmigos = [];
}
