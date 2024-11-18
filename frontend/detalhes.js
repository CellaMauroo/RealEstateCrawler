let index = 0;

const propriedades = [
    { id: 1, img: ["/images/download1.1.jpg", "/images/download1.2.jpg", "/images/download1.3.jpg", "/images/download1.4.jpg"], tipo: 'Apartamento', finalidade: 'Venda', cidade: 'São João', rua: 'Rua santo antonio', número: 954, bairro: 'Centro', preço: 350000.00, area: 170, infos: ['2 Quartos', '2 Vagas de Garagem', 'Churrasqueira', 'Piscina'], text: 'Imóvel bem localizado com fácil acesso ao centro da cidade. Este apartamento oferece uma estrutura completa, com 2 quartos, 2 vagas de garagem, churrasqueira e piscina, ideal para quem busca conforto e comodidade.' },
    { id: 2, img: ["/images/chacara1.1.jpg", "/images/chacara1.2.jpg", "/images/chacara1.3.jpg"], tipo: 'Chácara', finalidade: 'Venda', cidade: 'Pato Branco', rua: 'Rua das Flores', número: 456, bairro: 'Centro', preço: 500000.00, area: 350, infos: ['3 Quartos', '4 Vagas de Garagem', 'Piscina', 'Área Verde'], text: 'Linda chácara no coração de Pato Branco, com ampla área verde e 3 quartos. Possui 4 vagas de garagem e uma piscina refrescante, perfeita para quem procura tranquilidade e contato com a natureza.' },
    { id: 3, img: ["/images/terreno1.1.jpg", "/images/terreno1.2.jpg", "/images/terreno1.3.jpg"], tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', rua: 'Avenida Industrial', número: 789, bairro: 'Bairro Industrial', preço: 150000.00, area: 200, infos: ['Plano', 'Fácil Acesso'], text: 'Terreno plano para aluguel, localizado em área de fácil acesso no Bairro Industrial. Com 200 m², oferece excelente espaço para diversos tipos de empreendimento, estando em região estratégica da cidade.' },
    { id: 4, img: ["/images/casa1.1.jpg", "/images/casa1.2.jpg", "/images/casa1.3.jpg", "/images/casa1.4.jpg", "/images/casa1.5.jpg"], tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', rua: 'Rua José Bonifácio', número: 654, bairro: 'Centro', preço: 400000.00, area: 220, infos: ['3 Quartos', '2 Vagas de Garagem', 'Jardim'], text: 'Casa ampla em excelente localização no Centro de São João. Com 3 quartos, 2 vagas de garagem e um lindo jardim, é o lugar perfeito para uma família que busca espaço e conforto.' },
    { id: 5, img: ["/images/download2.1.jpg", "/images/download2.2.jpg", "/images/download2.3.jpg", "/images/download2.4.jpg"], tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', rua: 'Rua XV de Novembro', número: 321, bairro: 'Centro', preço: 250000.00, area: 90, infos: ['2 Quartos', '1 Vaga de Garagem', 'Varanda'], text: 'Ótimo apartamento para aluguel em Dois Vizinhos, com 2 quartos e 1 vaga de garagem. A varanda proporciona um ambiente agradável para momentos de lazer e descanso, próximo ao centro.' },
    { id: 6, img: ["/images/chacara2.1.jpg", "/images/chacara2.2.jpg", "/images/chacara2.3.jpg", "/images/chacara2.4.jpg"], tipo: 'Chácara', finalidade: 'Venda', cidade: 'São João', rua: 'Estrada dos Tropeiros', número: 101, bairro: 'Centro', preço: 450000.00, area: 400, infos: ['3 Quartos', 'Ampla Área Externa', 'Piscina', 'Campo de Futebol'], text: 'Ampla chácara em São João, com 3 quartos e extensa área externa. Ideal para quem gosta de atividades ao ar livre, com piscina e campo de futebol, proporcionando muito espaço para lazer e convivência.' },
    { id: 7, img: ["/images/terreno2.1.jpg", "/images/terreno2.2.jpg", "/images/terreno2.3.jpg"], tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', rua: 'Rua do Progresso', número: 202, bairro: 'Bairro Industrial', preço: 120000.00, area: 300, infos: ['Terreno Plano', 'Próximo ao Centro'], text: 'Terreno localizado no Bairro Industrial, perfeito para quem busca espaço para empreendimentos. Terreno plano com 300 m², próximo ao centro, com excelente potencial de investimento.' },
    { id: 8, img: ["/images/casa2.1.jpg", "/images/casa2.2.jpg", "/images/casa2.4.jpg"], tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', rua: 'Rua São Francisco', número: 404, bairro: 'Centro', preço: 370000.00, area: 250, infos: ['4 Quartos', '2 Vagas de Garagem', 'Sala de Jantar'], text: 'Espaçosa casa no centro de São João, com 4 quartos e 2 vagas de garagem. O imóvel conta ainda com sala de jantar, proporcionando um ambiente ideal para receber amigos e familiares.' },
    { id: 9, img: ["/images/casa3.1.jpg", "/images/casa3.2.jpg", "/images/casa3.3.jpg", "/images/casa3.4.jpg"], tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', rua: 'Rua Marechal Deodoro', número: 606, bairro: 'Bairro Industrial', preço: 420000.00, area: 240, infos: ['3 Quartos', '2 Vagas de Garagem', 'Área de Serviço', 'Jardim'], text: 'Casa bem localizada no Bairro Industrial de São João, com 3 quartos, 2 vagas de garagem e um lindo jardim. Com área de serviço completa, é uma ótima opção para quem busca conforto e praticidade.' },
    { id: 10, img: ["/images/terreno3.1.jpg", "/images/terreno3.2.jpg"], tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', rua: 'Avenida Brasil', número: 707, bairro: 'Centro', preço: 100000.00, area: 180, infos: ['Bem Localizado', 'Terreno Plano'], text: 'Bem localizado na Avenida Brasil, este terreno plano de 180 m² é ideal para novos projetos. Próximo ao centro de Pato Branco, oferece fácil acesso e boa visibilidade para empreendimentos comerciais.' },
    { id: 11, img: ["/images/download3.1.jpg", "/images/download3.2.jpg", "/images/download3.3.jpg", "/images/download3.4.jpg"], tipo: 'Apartamento', finalidade: 'Venda', cidade: 'Francisco Beltrão', rua: 'Rua Paraná', número: 808, bairro: 'Centro', preço: 360000.00, area: 110, infos: ['3 Quartos', '2 Vagas de Garagem', 'Varanda Gourmet'], text: 'Apartamento moderno em Francisco Beltrão, com 3 quartos e 2 vagas de garagem. A varanda gourmet é o destaque, ideal para quem gosta de receber convidados e aproveitar momentos de lazer com vista privilegiada.' },
    { id: 12, img: ["/images/cobertura1.1.jpg", "/images/cobertura1.2.jpg", "/images/cobertura1.3.jpg"], tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', rua: 'Rua General Carneiro', número: 909, bairro: 'Bairro Alto', preço: 900000.00, area: 300, infos: ['4 Quartos', '3 Vagas de Garagem', 'Churrasqueira', 'Jacuzzi'], text: 'Cobertura de luxo em Curitiba, com 4 quartos e 3 vagas de garagem. Possui uma área externa com churrasqueira e jacuzzi, proporcionando um ambiente sofisticado e exclusivo para lazer e convivência.' },
    { id: 13, img: ["/images/chacara3.1.jpg", "/images/chacara3.2.jpg", "/images/chacara3.3.jpg", "/images/chacara3.4.jpg", "/images/chacara3.5.jpg"], tipo: 'Chácara', finalidade: 'Venda', cidade: 'São João', rua: 'Estrada do Colono', número: 222, bairro: 'Centro', preço: 650000.00, area: 450, infos: ['4 Quartos', 'Piscina', 'Área Verde', 'Campo de Futebol'], text: 'Chácara espaçosa em São João, com 4 quartos e extensa área verde. Com piscina e campo de futebol, é perfeita para quem busca um refúgio tranquilo com diversas opções de lazer ao ar livre.' },
    { id: 14, img: ["/images/cobertura2.1.jpg", "/images/cobertura2.2.jpg"], tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', rua: 'Rua das Orquídeas', número: 555, bairro: 'Centro', preço: 850000.00, area: 280, infos: ['3 Quartos', '2 Vagas de Garagem', 'Jacuzzi', 'Churrasqueira'], text: 'Cobertura de alto padrão no Centro de Curitiba, com 3 quartos e 2 vagas de garagem. Conta com jacuzzi e churrasqueira, proporcionando um ambiente de lazer ideal para quem aprecia conforto e sofisticação.' }
];




function getId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function mostrarDetalhesPropriedade() {
    const id = getId();
    const propriedade = propriedades[id - 1];

    if (propriedade) {
        document.getElementById('image').src = propriedade.img[0];
        document.getElementById('property-title').textContent = `${propriedade.tipo} - ${propriedade.finalidade}`;
        if (propriedade.finalidade === "Aluguel") {
            document.getElementById('property-preco').textContent = `R$ ${propriedade.preço.toFixed(2)}/mês`;
        } else {
            document.getElementById('property-preco').textContent = `R$ ${propriedade.preço.toFixed(2)}`;
        }
        document.getElementById('property-endereco').textContent = `${propriedade.rua}, ${propriedade.número}, ${propriedade.bairro}, ${propriedade.cidade}`;
        document.getElementById('tamanho').textContent = `Área:${propriedade.area} m2`;
        document.getElementById('texto-espec').textContent = `${propriedade.text}`;
        document.getElementById('location').textContent = `${propriedade.bairro} - ${propriedade.cidade}`;
        const infosDetalhes = document.getElementById('infos-detalhes');
        infosDetalhes.innerHTML = '';


        propriedade.infos.forEach(info => {
            const label = document.createElement('label');
            label.classList.add('background-box');
            label.textContent = info;
            infosDetalhes.appendChild(label);
        });
    } else {
        document.getElementById('property-details').innerHTML = "<h1>Propriedade não encontrada.</h1>";
    }
}

document.addEventListener('DOMContentLoaded', mostrarDetalhesPropriedade);


function updateImg(i) {
    const id = getId();
    const img = document.getElementById('image');
    const imagens = propriedades[id - 1].img[i];
    console.log(imagens)
    img.src = imagens;


}

function nextImg() {
    const id = getId();
    const imagens = propriedades[id - 1].img;
    index++;
    if (index >= imagens.length) {
        index = 0;
    }
    updateImg(index);
}

function prevImg() {
    const id = getId();
    const imagens = propriedades[id - 1].img;
    index--;
    if (index < 0) {
        index = imagens.length - 1;
    }
    updateImg(index);
}

updateImg(index)

var modal = document.getElementById("myModal");

var img = document.getElementById("image");
var modalImg = document.getElementById("img01");
img.onclick = function () {
    modal.style.display = "block";
    const id = getId();
    const imagens = propriedades[id - 1].img[index];
    modalImg.src = imagens;
}
function modalUpdate(i) {
    const id = getId();
    const imagens = propriedades[id - 1].img[i];
    modalImg.src = imagens;
}

function modalNext() {
    const id = getId();
    const imagens = propriedades[id - 1].img;
    index++;
    if (index >= imagens.length) {
        index = 0;
    }
    modalUpdate(index);
}

function modalPrev() {
    const id = getId();
    const imagens = propriedades[id - 1].img;
    index--;
    if (index < 0) {
        index = imagens.length - 1;
    }
    modalUpdate(index);
}
modalUpdate(index)

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

function changeCss() {
    var links = document.querySelectorAll("header a");
    var header = document.querySelector("header");
    var logo = document.getElementById("img-header")

    if (window.scrollY === 0) {
        header.style.backgroundColor = "transparent"

    } else {
        links.forEach(link => {
            link.style.color = '#000000';
        });
        header.style.backgroundColor = "rgb(255, 255, 255, 0.9)"
        header.style.backdropFilter = 'blur(2px);'


        logo.src = "https://napa-residence.b-cdn.net/wp-content/uploads/2024/05/napa-dark-brown.svg"

    }
}
window.addEventListener("load", changeCss);
window.addEventListener("scroll", changeCss);
