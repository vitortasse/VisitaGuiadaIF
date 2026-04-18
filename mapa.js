const dadosBlocos = {
    "Bloco A": "Núcleo de Informações, Pedagogia e Exatas. Conta com um auditório",
    "Bloco B": "Núcleo de Informática.",
    "Bloco C": "Núcleo de Ciências Naturais.",
    "Bloco D": "Núcleo de Ciências Humanas e Física.",
    "Bloco E": "Núcleo de Línguas. Conta com Biblioteca e Infocentro.",
    "Cantina": "Cantina do Campus. Oferece grande variedade de alimentos e bebidas.",
    "Centro Administrativo": "Diretorias do Campus. Conta com Auditório principal..",
    "RU": "Restaurante Universitário. Serve Almoço e Janta de Segunda à Sexta para os alunos e servidores do campus.",
    "Bloco G": "Núcleo de Mecânica. Conta com o Corsário BAJA.",
    "Bloco H": "Núcleo de Edificações.",
    "Bloco F": "Núcleo de Metalurgia.",
    "Bloco Q": "Salas de aula.",
    "Bloco M": "Sala de aula de informática. Núcleo de EAD.",
    "Ginásio": "Espaço poliesportivo do campus.",
    "Quadra": "Quadra aberta para lazer e atividades físicas.",
    "Bloco I": "Núcleo de Elétrica.",
    "Bloco K": "Salas de aula.",
    "Bloco N": "Núcleo de Design, Eventos e Finanças.",
    "Bloco O": "Núcleo de Ações Inclusivas."
};

const params = new URLSearchParams(window.location.search);
const blocoAlvo = params.get('bloco');

function destacarBloco(nome) {
    document.querySelectorAll('.block').forEach(b => {
        b.style.fill = b.getAttribute('data-name') === "Centro Administrativo" ? "#2d3748" : 
                       b.getAttribute('data-name') === "Ginásio" || b.getAttribute('data-name') === "Quadra" ? "#a0aec0" : 
                       b.getAttribute('data-name') === "Bloco O" ? "#8B4513" : "#32a041";
        b.style.stroke = "none";
    });

    const el = document.querySelector(`[data-name="${nome}"]`);
    if (el) {
        el.style.fill = "#e30613";
        el.style.stroke = "#ffffff";
        el.style.strokeWidth = "3";
        document.getElementById('info-title').innerText = nome;
        document.getElementById('info-text').innerText = dadosBlocos[nome];
    }
}

document.querySelectorAll('.block').forEach(el => {
    el.addEventListener('click', () => {
        destacarBloco(el.getAttribute('data-name'));
    });
});

if (blocoAlvo) {
    destacarBloco(blocoAlvo);
}