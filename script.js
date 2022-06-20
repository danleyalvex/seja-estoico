
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
        frase:'A felicidade da sua vida depende da qualidade dos seus pensamentos.'
    },
    {
        autor:'Sêneca',
        frase:'Estamos mais frequentemente assustados do que feridos; e sofremos mais na imaginação do que na realidade.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Se for suportável, então aguente. Pare de reclamar.'
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
    {
        autor:'Marco Aurélio',
        frase:'A primeira regra é manter o espírito imperturbável. A segunda é olhar as coisas de frente e saber o que são.'
    },
    {
        autor:'Epicteto',
        frase:'Quando alguém está devidamente fundamentado na vida, não deve ter que olhar para fora de si para obter aprovação.'
    },
    {
        autor:'Sêneca',
        frase:'Todo o futuro está na incerteza: viva imediatamente.'
    },
    {
        autor:'Sêneca',
        frase:'A mente que está ansiosa com os eventos futuros é miserável.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Acolhe a alvorada já dizendo, antecipadamente, para ti mesmo: vou topar com o indiscreto, com o ingrato, com o insolente, com o pérfido, com o invejoso, o insociável.'
    },
    {
        autor:'Epicteto',
        frase:'Temos dois ouvidos e uma boca para que possamos ouvir duas vezes mais do que falamos.'
    },
    {
        autor:'Epicteto',
        frase:'É da natureza do sábio resistir aos prazeres, mas do tolo ser escravo deles.'
    },
    {
        autor:'Epicteto',
        frase:'Primeiro aprenda o significado do que você diz e depois fale.'
    },
    {
        autor:'Epicteto',
        frase:'Se você quer algo bom, pegue você mesmo.'
    },
    {
        autor:'Sêneca',
        frase:'Apresse-se e viva.'
    },
    {
        autor:'Sêneca',
        frase:'Para muitos homens, a aquisição de riqueza não acaba com seus problemas, apenas os muda.'
    },
    {
        autor:'Sêneca',
        frase:'A vida é muito curta e ansiosa para quem esquece o passado, negligencia o presente e teme o futuro.'
    },
    {
        autor:'Sêneca',
        frase:'A dificuldade vem da nossa falta de confiança.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Quanto mais valorizamos as coisas fora do nosso controle, menos controle temos.'
    },
    {
        autor:'Marco Aurélio',
        frase:'Escolha o tipo de pessoa que você quer ser e mantenha-se fiel a ele, seja sozinho ou acompanhado.'
    },
    {
        autor:'Marco Aurélio',
        frase:'A melhor resposta para a raiva é o silêncio.'
    },
    {
        autor:'Zenão de citio',
        frase:'O homem conquista o mundo conquistando a si mesmo.'
    },
    {
        autor:'Zenão de citio',
        frase:'Melhor tropeçar com os pés do que com a língua.'
    },
];

function generateQuote () {
    let random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1); 
    console.log(arrayOfQuotes[random].autor);
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].frase}</span>`;
    authorOutput.innerHTML = `<small>${arrayOfQuotes[random].autor}</small>`;
}
