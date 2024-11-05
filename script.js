let index = 0;

const propriedades = [
    { id: 1, img: ["/images/download1.1.jpg", "/images/download1.2.jpg", "/images/download1.3.jpg", "/images/download1.4.jpg"], tipo: 'Apartamento', finalidade: 'Venda', cidade: 'São João', rua: 'Rua santo antonio', número: 954, bairro: 'Centro', preço: 350000.00, area: 170, infos: ['2 Quartos', '2 Vagas de Garagem', 'Churrasqueira', 'Piscina'] },
    { id: 2, img: ["/images/chacara1.1.jpg", "/images/chacara1.2.jpg", "/images/chacara1.3.jpg"], tipo: 'Chácara', finalidade: 'Venda', cidade: 'Pato Branco', rua: 'Rua das Flores', número: 456, bairro: 'Centro', preço: 500000.00, area: 350, infos: ['3 Quartos', '4 Vagas de Garagem', 'Piscina', 'Área Verde'] },
    { id: 3, img: ["/images/terreno1.1.jpg", "/images/terreno1.2.jpg", "/images/terreno1.3.jpg"], tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', rua: 'Avenida Industrial', número: 789, bairro: 'Bairro Industrial', preço: 150000.00, area: 200, infos: ['Plano', 'Fácil Acesso'] },
    { id: 4, img: ["/images/casa1.1.jpg", "/images/casa1.2.jpg", "/images/casa1.3.jpg", "/images/casa1.4.jpg", "/images/casa1.5.jpg"], tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', rua: 'Rua José Bonifácio', número: 654, bairro: 'Centro', preço: 400000.00, area: 220, infos: ['3 Quartos', '2 Vagas de Garagem', 'Jardim'] },
    { id: 5, img: ["/images/download2.1.jpg", "/images/download2.2.jpg", "/images/download2.3.jpg", "/images/download2.4.jpg"], tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', rua: 'Rua XV de Novembro', número: 321, bairro: 'Centro', preço: 250000.00, area: 90, infos: ['2 Quartos', '1 Vaga de Garagem', 'Varanda'] },
    { id: 6, img: ["/images/chacara2.1.jpg", "/images/chacara2.2.jpg", "/images/chacara2.3.jpg", "/images/chacara2.4.jpg"], tipo: 'Chácara', finalidade: 'Venda', cidade: 'São João', rua: 'Estrada dos Tropeiros', número: 101, bairro: 'Centro', preço: 450000.00, area: 400, infos: ['3 Quartos', 'Ampla Área Externa', 'Piscina', 'Campo de Futebol'] },
    { id: 7, img: ["/images/terreno2.1.jpg", "/images/terreno2.2.jpg", "/images/terreno2.3.jpg"], tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', rua: 'Rua do Progresso', número: 202, bairro: 'Bairro Industrial', preço: 120000.00, area: 300, infos: ['Terreno Plano', 'Próximo ao Centro'] },
    { id: 8, img: ["/images/casa2.1.jpg", "/images/casa2.2.jpg", "/images/casa2.4.jpg"], tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', rua: 'Rua São Francisco', número: 404, bairro: 'Centro', preço: 370000.00, area: 250, infos: ['4 Quartos', '2 Vagas de Garagem', 'Sala de Jantar'] },
    { id: 9, img: ["/images/casa3.1.jpg", "/images/casa3.2.jpg", "/images/casa3.3.jpg", "/images/casa3.4.jpg"], tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', rua: 'Rua Marechal Deodoro', número: 606, bairro: 'Bairro Industrial', preço: 420000.00, area: 240, infos: ['3 Quartos', '2 Vagas de Garagem', 'Área de Serviço', 'Jardim'] },
    { id: 10, img: ["/images/terreno3.1.jpg", "/images/terreno3.2.jpg"], tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', rua: 'Avenida Brasil', número: 707, bairro: 'Centro', preço: 100000.00, area: 180, infos: ['Bem Localizado', 'Terreno Plano'] },
    { id: 11, img: ["/images/download3.1.jpg", "/images/download3.2.jpg", "/images/download3.3.jpg", "/images/download3.4.jpg"], tipo: 'Apartamento', finalidade: 'Venda', cidade: 'Francisco Beltrão', rua: 'Rua Paraná', número: 808, bairro: 'Centro', preço: 360000.00, area: 110, infos: ['3 Quartos', '2 Vagas de Garagem', 'Varanda Gourmet'] },
    { id: 12, img: ["/images/cobertura1.1.jpg", "/images/cobertura1.2.jpg", "/images/cobertura1.3.jpg"], tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', rua: 'Rua General Carneiro', número: 909, bairro: 'Bairro Alto', preço: 900000.00, area: 300, infos: ['4 Quartos', '3 Vagas de Garagem', 'Churrasqueira', 'Jacuzzi'] },
    { id: 13, img: ["/images/chacara3.1.jpg", "/images/chacara3.2.jpg", "/images/chacara3.3.jpg", "/images/chacara3.4.jpg", "/images/chacara3.5.jpg"], tipo: 'Chácara', finalidade: 'Venda', cidade: 'São João', rua: 'Estrada do Colono', número: 222, bairro: 'Centro', preço: 650000.00, area: 450, infos: ['4 Quartos', 'Piscina', 'Área Verde', 'Campo de Futebol'] },
    { id: 14, img: ["/images/cobertura2.1.jpg", "/images/cobertura2.2.jpg"], tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', rua: 'Rua das Orquídeas', número: 555, bairro: 'Centro', preço: 850000.00, area: 280, infos: ['3 Quartos', '2 Vagas de Garagem', 'Jacuzzi', 'Churrasqueira'] },
];

const tipos = [...new Set(propriedades.map(prop => prop.tipo))];
const cidades = [...new Set(propriedades.map(prop => prop.cidade))];
const bairros = [...new Set(propriedades.map(prop => prop.bairro))];
const finalidade = [...new Set(propriedades.map(prop => prop.finalidade))];

function preencherSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

preencherSelect('tipo', tipos);
preencherSelect('cidade', cidades);
preencherSelect('bairro', bairros);
preencherSelect('finalidade', finalidade);

function mostrarPropriedades(propriedadesParaMostrar) {
    const container = document.getElementById('containerPropriedades');
    container.innerHTML = '';

    if (propriedadesParaMostrar.length === 0) {
        container.innerHTML = '<h1 class="not-found"> Nenhum imóvel encontrado.</h1>';
        return;
    }

    propriedadesParaMostrar.forEach(propriedade => {
        const elementoPropriedade = document.createElement('div');
        elementoPropriedade.className = 'propriedade';
        if (propriedade.finalidade === "Aluguel") {
            elementoPropriedade.innerHTML = `
            <section>
                <a href="detalhes.html?id=${propriedade.id}">
                    <img class="image" src=${propriedade.img[0]} alt="Property Image" />
                    <h1 class="poppins-semibold">${propriedade.tipo} - ${propriedade.finalidade}</h1>
                    <p class="poppins-regular">${propriedade.cidade} - ${propriedade.bairro}</p>
                    <h2 class="poppins-semibold">R$ ${propriedade.preço.toFixed(2)}/mês </h2>
                </a>
            </section>
            `;
        } else {
            elementoPropriedade.innerHTML = `
            <section>
                <a href="detalhes.html?id=${propriedade.id}">
                    <img class="image" src=${propriedade.img[0]} />
                    <h1 class="poppins-semibold">${propriedade.tipo} - ${propriedade.finalidade}</h1>
                    <p class="poppins-regular">${propriedade.cidade} - ${propriedade.bairro}</p>
                    <h2 class="poppins-semibold">R$ ${propriedade.preço.toFixed(2)}</h2>
                </a>
            </section>
        `;
        }
        container.appendChild(elementoPropriedade);
    });
}

function filtrar() {
    const tipo = document.getElementById('tipo').value;
    const finalidade = document.getElementById('finalidade').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const min = document.getElementById('min').value || 0;
    const max = document.getElementById('max').value || Infinity;

    const filtrado = propriedades.filter(propriedade => {
        return (
            (tipo === 'all' || propriedade.tipo === tipo) &&
            (finalidade === 'all' || propriedade.finalidade === finalidade) &&
            (cidade === 'all' || propriedade.cidade === cidade) &&
            (bairro === 'all' || propriedade.bairro === bairro) &&
            propriedade.preço >= min && propriedade.preço <= max
        );
    });
    mostrarPropriedades(filtrado);
}

function limpar() {
    document.getElementById('tipo').value = 'all';
    document.getElementById('finalidade').value = 'all';
    document.getElementById('cidade').value = 'all';
    document.getElementById('bairro').value = 'all';
    document.getElementById('min').value = null;
    document.getElementById('max').value = Infinity;

    mostrarPropriedades(propriedades);
}

document.getElementById('buscar-btn').addEventListener('click', filtrar);
document.getElementById('limpar-btn').addEventListener('click', limpar);

mostrarPropriedades(propriedades);

function changeCss() {
    var links = document.querySelectorAll("header a");
    var header = document.querySelector("header");
    var logo = document.getElementById("img-header")

    if (window.scrollY === 0) {
        links.forEach(link => {
            link.style.color = '#ffffff';
        });
        header.className = 'teste1';
        logo.src = "https://napa-residence.b-cdn.net/wp-content/uploads/2024/05/napa-brown-white.svg"

    } else {
        links.forEach(link => {
            link.style.color = '#000000';
        });
        header.className = 'teste';
        logo.src = "https://napa-residence.b-cdn.net/wp-content/uploads/2024/05/napa-dark-brown.svg"

    }
}


window.addEventListener("load", changeCss);
window.addEventListener("scroll", changeCss);