const conteudoSite = [
    [
        '<h1>Receita de Bolo</h1>',
        'Receita de bolo: 3 ovos, 1 xícara de óleo, 3 xícaras de farinha de trigo, 1 xícara de água, 2 xícaras de açúcar e 1 colher de fermento',
        'Bata os ovos e a água até formar espuma. Coloque óleo, açúcar e farinha. Unte uma forma. Leve ao forno por 40 minutos',
        'Sirva para seus convidados, aproveite!'
    ],
    [
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
        'Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.',
        'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por "lorem ipsum" mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).'
    ],
    [
        'Jade, Bernardo, Pedro, Israel, Alberto, Frank, Carl',
        'Epaminondas, Teseu, Henry, Charles',
        'Lincoln, Donald, Mickey, Goofy'
    ]
];
const botaoAba1 = document.getElementById('botao-aba-1');
const botaoAba2 = document.getElementById('botao-aba-2');
const botaoAba3 = document.getElementById('botao-aba-3');
const conteudo = document.getElementById('conteudo');
//Pode ter uma promise ou requisição AJAX
function exibirConteudo(conteudos) {
    let conteudoEmLista = '';
    for(const item of conteudos) {
        conteudoEmLista += `<li>${item}</li>`;
    }
    conteudo.innerHTML = conteudoEmLista;  
}
//Tira a classe dos outros botões e põe a classe 'active' para o botão passado por parâmetro para a função
function ativaBotao(botao) {
    botaoAba1.className = '';
    botaoAba2.className = '';
    botaoAba3.className = '';
    botao.className = 'active';
}
//Quando o botão foi clicado, é chamada a função de ativar o botão
function manejaClick(evento) {
    const idBotao = evento.target.id;
    ativaBotao(evento.target);
    if(idBotao === "botao-aba-1") {
        exibirConteudo(conteudoSite[0]);
    }
    if(idBotao === "botao-aba-2") {
        exibirConteudo(conteudoSite[1]);
    }
    if(idBotao === "botao-aba-3") {
        exibirConteudo(conteudoSite[2]);
    }
}
botaoAba1.addEventListener('click', manejaClick);
botaoAba2.addEventListener('click', manejaClick);
botaoAba3.addEventListener('click', manejaClick);