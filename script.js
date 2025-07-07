const phrases = [
    "Fica até ao final... são 10 minutos",
    "<i>08/07/2025</i>",  
    "<i>(Quase 2 semanas depois de 25 de junho.)</i>",
    "Olá Carolina",
    "Tudo bem?",
    "Como anda a vida?",
    "Anda bem como sempre",
    "Sinto a tua falta sabias?",
    "Porém...",
    "Ao invés de ficar apenas, mal...",
    "Refleti e entendi",
    "Começei a te entender melhor",
    "Apesar de serem apenas 12 dias",
    "E afinal de contas",
    "Começei a notar defeitos",
    "Deixa-me explicar-me",
    "Apesar de estar triste e mal",
    "Tomei a iniciativa para parar, e refletir",
    "O que se tinha passado",
    "E com o tempo... não tomei as melhores decisões",
    "E não fiz as escolhas certas",
    "Porém, algumas coisas que também não fizeste",
    "<i>(Explicita Tiago)</i>",
    "Então.",
    "De um lado tinha um que queria resolver tudo na hora (eu)",
    "Para fugir á minha ansiedade...",
    "No outro, tinha apenas uma menina que ama o seu espaço",
    "E prefere ir na calma com as coisas e dar tempo",
    "Yep... já podes ver onde está o erro.",
    "<i>Precipitei-me...</i>",
    "E te meti pressão",
    "Começo a notar que...",
    "O erro foram dos dois lados e sou homem para admitir que...",
    "Errei mais do que devia.",
    "Mas és uma miúda diferente",
    "Quando te sentias mal, tu te isolavas mais",
    "E pensando bem... isso nem ajudou tanto",
    "Nem para um lado quanto para o outro",
    "Apenas nos distanciou um pouco",
    "E eu não venho meter a culpa a ninguém na verdade...",
    "Mas... começando a ver o teu lado.",
    "Apercebi que talvez tomaste uma boa decisão",
    "Porque eu era demasiado apegado a ti...",
    "A um ponto de era insuportável, chato, sufocatório",
    "Começei a te entender.",
    "Teria eu apenas de aceitar que...",
    "Nem tudo teria de se resolver na hora",
    "E cada coisa devia levar o seu tempo",
    "E que eu sabia que amavas o teu espaço",
    "Mas eu fui muito... submissivo",
    "Deu desentendimentos, desistências...",
    "Porém palavras ou uma conversa profunda",
    "Não iria muito consertar",
    "O erro?",
    "Não nos termos aceitado um ao outro mais cedo",
    "Mas apenas nos começámos a aceitar",
    "Quando estavas cheia de pressão.",
    "<i>O que teria de acontecer?</i>",
    "Fácil.",
    "Eu ter sido mais independente e aceitar que ficar sozinho nem é mau",
    "E se doasses um pouco a mais",
    "Que resultaria? Um meio-termo",
    "Um balanço entre nós",
    "Que respeitava a necessidade de cada um",
    "Algo que não vimos mais cedo...",
    "Estava um pouco preocupado mais no que tu fazias",
    "Do que eu fazia a ti",
    "Yep... erros ambos",
    "Porém uma coisa boa, somos novos",
    "Nossa primeira vez...",
    "Estamos ainda a aprender o que é o amor",
    "Mas, tem de ser juntos, e aceitar os obstáculos que nos passam",
    "E os enfrentar",
    "Para terminar.",
    "Um tempo para nós foi o mais ideal",
    "Ambos crescer como pessoas, e encontrar a nós mesmos",
    "Para finalmente...",
    "Nos reencontrar-mos melhor",
    "E mais saudávelmente",
    "E que pouco a pouco",
    "E com melhor entendimento",
    "Possamos reconstruir uma ponte",
    "Que por sua vez lá foi bela",
    "Porta-te bem",
    "<i>Tiago</i>"
];

const textElement = document.getElementById('text');
const heartElement = document.getElementById('heart');
let index = 0;

function showNextPhrase() {
if (index < phrases.length - 1) {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.innerHTML = phrases[index];
        textElement.style.opacity = 1;
        index++;
        setTimeout(showNextPhrase, 3000);
    }, 500);
} else {
    textElement.style.display = 'none';
    heartElement.style.display = 'block';
}
}

setTimeout(showNextPhrase, 1000);