const questions = [
    "O que você acha que é a parte mais difícil do que eu faço para viver?",
    "Qual é uma coisa que você faz para relaxar?",
    "Se você pudesse ir a qualquer show, de quem seria?",
    "Qual reality show você acha que eu mais provavelmente assistiria? Explique.",
    "Qual foi a primeira coisa que você notou sobre mim?",
    "Se o Myspace ainda existisse, qual seria a minha música de perfil?",
    "Se você fosse me comprar um presente, sabendo nada sobre mim além da minha aparência, o que seria?",
    "Em uma escala de 1 a 10, quão bagunçado você acha que meu carro é? 1 sendo o mais limpo e 10 um completo desastre, explique.",
    "Você acha que plantas prosperam ou morrem sob meus cuidados? Explique.",
    "Eu pareço ser gentil? Explique.",
    "Eu pareço mais um tipo criativo ou analítico? Explique.",
    "Eu pareço ser alguém que tatuaria um nome em mim? Por que sim ou por que não?",
    "Complete a frase: Só de olhar para você, eu pensaria ____________.",
    "O que meus sapatos dizem sobre mim?",
    "Você acha que eu já fui demitido de um emprego? Se sim, por quê?",
    "Qual foi sua primeira impressão de mim?",
    "Qual foi sua primeira impressão de mim no Bumble vs na vida real?",
    "Como você descreveria meu tipo em três palavras?",
    "O que você achou da minha primeira mensagem?",
    "Entre nós dois, quem parece ser o melhor em enviar mensagens? Explique.",
    "O que meu Instagram diz sobre mim?",
    "Faça uma suposição sobre mim.",
    "O que sobre mim te intriga?",
    "O que você acha que eu mais provavelmente gasto muito dinheiro?",
    "Quando criança, o que você acha que eu queria ser?",
    "Complete a frase: só de olhar para você eu pensaria ...",
    "Você acha que eu era popular na escola? Explique.",
    "Quantas multas de trânsito você acha que eu já recebi na vida?",
    "Eu pareço ser alguém que tatuaria um nome em mim? Por que sim ou por que não?",
    "Você acha que eu me apaixono facilmente? Por que sim ou por que não?"
];

document.getElementById('nextQuestionBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.textContent = questions[randomIndex];
});
