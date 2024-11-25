let index = 0;
let propriedades = [];

async function Buscar() {
    const url = 'http://localhost:3000/propriedades';

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error('Erro na requisição');
        }

        const dados = await resposta.json();

        if (Array.isArray(dados)) {
            propriedades = dados;
        } else {
            propriedades = [];
            console.error("A resposta não é um array!");
        }

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
        mostrarPropriedades(propriedades);
    } catch (erro) {
        console.error('Erro ao buscar propriedades:', erro);
    }
}

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
        console.log(propriedade.nome_arquivo)
        if (propriedade.finalidade === "Aluguel") {
            elementoPropriedade.innerHTML = `
                <section>
                    <a href="detalhes.html?id=${propriedade.id}">
                        <img class="image" src="../backend/uploads/${propriedade.nome_arquivo}" alt="Property Image" />
                        <h1 class="poppins-semibold">${propriedade.tipo} - ${propriedade.finalidade}</h1>
                        <p class="poppins-regular">${propriedade.cidade} - ${propriedade.bairro}</p>
                        <h2 class="poppins-semibold">R$ ${propriedade.preco}/mês </h2>
                    </a>
                </section>
                `;
        } else {
            elementoPropriedade.innerHTML = `
            <section>
                <a href="detalhes.html?id=${propriedade.id}">
                    <img class="image" src="../backend/uploads/${propriedade.nome_arquivo}" alt="Property Image" />
                    <h1 class="poppins-semibold">${propriedade.tipo} - ${propriedade.finalidade}</h1>
                    <p class="poppins-regular">${propriedade.cidade} - ${propriedade.bairro}</p>
                    <h2 class="poppins-semibold">R$ ${propriedade.preco} </h2>
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
            propriedade.preco >= min && propriedade.preco <= max
        );
    });
    console.log(propriedades)
    console.log(filtrado)
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
Buscar()