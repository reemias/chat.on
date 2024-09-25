document.getElementById('botaoEnviar').addEventListener('click', function() {
    // Captura o conteúdo do input
    var mensagem = document.getElementById('inputMensagem').value;

    // Cria um novo elemento span
    var novoSpan = document.createElement('span');
    novoSpan.className = 'mensagem-span';
    novoSpan.textContent = mensagem;

    // Adiciona o novo span ao main
    document.querySelector('main.mensagens').appendChild(novoSpan);

    // Limpa o input
    document.getElementById('inputMensagem').value = '';
});

