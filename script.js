const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");
console.log(generateQuoteBtn, quoteOutput, authorOutput);


generateQuoteBtn.addEventListener('click', generateQuote);

const arrayOfQuotes=[
    {
        autor:'Epicteto',
        frase:'Quanto tempo você vai esperar antes de exigir o melhor de si mesmo?'
    },
    {
        autor:'Epicteto',
        frase:'O homem não se preocupa tanto com problemas reais quanto com as ansiedades imaginadas sobre problemas reais'
    },
    {
        autor:'Marco Aurélio',
        frase:'Se você está angustiado por qualquer coisa externa, a dor não se deve à coisa em si, mas à sua estimativa dela; e isso você tem o poder de revogar a qualquer momento.'
    },
    {
        autor:'Epicteto',
        frase:'Primeiro diga a si mesmo o que você seria; então faça o que você tem que fazer.'
    },
    {
        autor:'Epicteto',
        frase:'Lembre-se: não basta ser agredido ou insultado para ser ferido, você deve acreditar que está sendo prejudicado. Se alguém conseguir provocá-lo, perceba que a sua própria mente é cúmplice da provocação.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Se você está angustiado por qualquer coisa externa, a dor não se deve à coisa em si, mas à sua estimativa dela; e isso você tem o poder de revogar a qualquer momento.'
    },
    {
        autor:'Sêneca',
        frase:'Estamos mais frequentemente assustados do que feridos; e sofremos mais na imaginação do que na realidade.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Se você está angustiado por qualquer coisa externa, a dor não se deve à coisa em si, mas à sua estimativa dela; e isso você tem o poder de revogar a qualquer momento.'
    },
    {
        autor:'Sêneca',
        frase:'Nada, na minha opinião, é uma prova melhor de uma mente bem organizada do que a capacidade de um homem parar exatamente onde está e passar algum tempo em sua própria companhia.'
    },
    {
        autor:'Sêneca',
        frase:'As pessoas são frugais na guarda de seus bens pessoais; mas assim que se trata de desperdiçar tempo, eles perdem aquilo em que é justamente certo ser mesquinho.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Pense em você como alguém que morreu. Você viveu sua vida. Agora, agarre os dias que sobraram e viva-os de maneira adequada. Aquele que não transmite luz cria sua própria escuridão.'
    },
    {
        autor:'Epicteto',
        frase:'Não espere que tudo aconteça como você deseja, mas sim como tudo realmente deve acontecer; então sua vida irá fluir bem.'
    },
    {
        autor:'Epicteto',
        frase:'A principal tarefa na vida é simplesmente esta: identificar e separar as coisas para que eu possa dizer claramente a mim mesmo quais são as coisas externas que não estão sob meu controle e quais têm a ver com as escolhas que eu realmente controlo. Onde então procuro o bem e o mal? Não às coisas externas incontroláveis, mas dentro de mim, nas escolhas que são minhas.'
    },
    {
        autor:'Epicteto',
        frase:'É por isso que os filósofos nos alertam para não ficarmos satisfeitos com o mero aprendizado, mas para adicionar a prática e depois o treinamento. Pois com o passar do tempo esquecemos o que aprendemos e acabamos fazendo o oposto, e temos opiniões opostas do que deveríamos.'
    },
    {
        autor:'Sêneca',
        frase:'O sábio não se eleva pela prosperidade nem se abate pela adversidade; pois sempre ele se esforçou para confiar predominantemente em si mesmo e obter toda a alegria.'
    },
    {
        autor:'Epicteto',
        frase:'O segredo é manter a companhia apenas de pessoas que o enaltecem, cuja presença desperta o que você tem de melhor.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Você tem poder sobre sua mente, não sobre eventos externos. Perceba isso e você encontrará força.'
    },
    {
        autor:'Sêneca',
        frase:'Uma gema não pode ser polida sem atrito, nem um homem aperfeiçoado sem provações.'
    },
    // {
    //     autor:'Marco Aurélio',
    //     frase:'A primeira regra é manter o espírito imperturbável. A segunda é olhar as coisas de frente e saber o que são.'
    // },
    {
        autor:'Marco Aurélio',
        frase:'A primeira regra é manter o espírito imperturbável. A segunda é olhar as coisas de frente e saber o que são.'
    },
    {
        autor:'Marco Aurélio',
        frase:'A primeira regra é manter o espírito imperturbável. A segunda é olhar as coisas de frente e saber o que são.'
    },
    {
        autor:'Marco Aurélio',
        frase:'A primeira regra é manter o espírito imperturbável. A segunda é olhar as coisas de frente e saber o que são.'
    },
];

function generateQuote () {
    let random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1); 
    console.log(arrayOfQuotes[random].autor);
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].frase}</span>`;
    authorOutput.innerHTML = `<small>${arrayOfQuotes[random].autor}</small>`;
}