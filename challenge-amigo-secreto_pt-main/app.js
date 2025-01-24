//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomeAmigos = [];
const amigos = ['Maria', 'Gracinha', 'Jana', 'Rodrigo', 'Herodes'];
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoAleatorio = amigos[indiceAleatorio];
console.log(amigoAleatorio);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Amigo Secreto');
exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
exibirTextoNaTela('h3', 'Clique no botão para sortear um amigo secreto');
document.querySelector('button').addEventListener('click', function() {
    let nomeAmigo = document.querySelector('input[name="input-name"]').value;
    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome válido!');
    } else {
        listaNomeAmigos.push(nomeAmigo);
        exibirTextoNaTela('h3', `Amigo ${nomeAmigo} adicionado!`);
    }
});
function gerarNomeAleatorio() {
    if (listaNomeAmigos.length === 0) {
        return 'Nenhum amigo foi adicionado!';
    }
    const indiceAleatorio = Math.floor(Math.random() * listaNomeAmigos.length);
    const amigoAleatorio = listaNomeAmigos[indiceAleatorio];
    listaNomeAmigos.splice(indiceAleatorio, 1);
    return amigoAleatorio;
}