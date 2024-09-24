const propriedades = [
    { id: 1, img: "/images/casa.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', bairro: 'Centro', preço: 350000.00 },
    { id: 2, img: "/images/download.jpg", tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', bairro: 'Bairro São Cristovão', preço: 180000.00 },
    { id: 3, img: "/images/chacara.jpg", tipo: 'Chácara', finalidade: 'Venda', cidade: 'Pato Branco', bairro: 'Centro', preço: 500000.00 },
    { id: 4, img: "/images/terreno.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', bairro: 'Bairro Industrial', preço: 150000.00 },
    { id: 5, img: "/images/casa1.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', bairro: 'Centro', preço: 400000.00 },
    { id: 6, img: "/images/download1.jpg", tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', bairro: 'Centro', preço: 250000.00 },
    { id: 7, img: "/images/chacara1.jpg", tipo: 'Chácara', finalidade: 'Venda', cidade: 'São João', bairro: 'Centro', preço: 450000.00 },
    { id: 8, img: "/images/terreno1.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', bairro: 'Bairro Industrial', preço: 120000.00 },
    { id: 9, img: "/images/casa2.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', bairro: 'Centro', preço: 370000.00 },
    { id: 10, img: "/images/download2.jpg", tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', bairro: 'Bairro São Cristovão', preço: 190000.00 },
    { id: 11, img: "/images/casa3.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', bairro: 'Bairro Industrial', preço: 420000.00 },
    { id: 12, img: "/images/terreno2.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Pato Branco', bairro: 'Centro', preço: 100000.00 },
    { id: 13, img: "/images/download3.jpg", tipo: 'Apartamento', finalidade: 'Venda', cidade: 'Francisco Beltrão', bairro: 'Centro', preço: 360000.00 },
    { id: 14, img: "/images/cobertura2.jpg", tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', bairro: 'Bairro Alto', preço: 900000.00 },
    { id: 15, img: "/images/terreno3.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', bairro: 'Bairro Pinheirinho', preço: 130000.00 },
    { id: 16, img: "/images/chacara2.jpg", tipo: 'Chácara', finalidade: 'Venda', cidade: 'São João', bairro: 'Centro', preço: 650000.00 },
    { id: 17, img: "/images/casa4.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'Pato Branco', bairro: 'Centro', preço: 480000.00 },
    { id: 18, img: "/images/download4.jpg", tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Curitiba', bairro: 'Bairro Alto', preço: 210000.00 },
    { id: 19, img: "/images/cobertura1.jpg", tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', bairro: 'Centro', preço: 850000.00 },
    { id: 20, img: "/images/terreno4.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'São João', bairro: 'Bairro São Cristovão', preço: 110000.00 },
    { id: 21, img: "/images/casa5.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'Dois Vizinhos', bairro: 'Centro', preço: 350000.00 },
    { id: 22, img: "/images/download5.jpg", tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Francisco Beltrão', bairro: 'Bairro Pinheirinho', preço: 270000.00 },
    { id: 23, img: "/images/chacara3.jpg", tipo: 'Chácara', finalidade: 'Venda', cidade: 'Pato Branco', bairro: 'Bairro Industrial', preço: 550000.00 },
    { id: 24, img: "/images/terreno5.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'São João', bairro: 'Centro', preço: 140000.00 },
    { id: 25, img: "/images/casa6.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'Curitiba', bairro: 'Centro', preço: 680000.00 },
    { id: 26, img: "/images/download6.jpg", tipo: 'Apartamento', finalidade: 'Aluguel', cidade: 'Dois Vizinhos', bairro: 'Bairro São Cristovão', preço: 180000.00 },
    { id: 27, img: "/images/cobertura.jpg", tipo: 'Cobertura', finalidade: 'Venda', cidade: 'Curitiba', bairro: 'Bairro Alto', preço: 950000.00 },
    { id: 28, img: "/images/terreno6.jpg", tipo: 'Terreno', finalidade: 'Aluguel', cidade: 'Francisco Beltrão', bairro: 'Centro', preço: 120000.00 },
    { id: 29, img: "/images/chacara4.jpg", tipo: 'Chácara', finalidade: 'Venda', cidade: 'Pato Branco', bairro: 'Centro', preço: 600000.00 },
    { id: 30, img: "/images/casa7.jpg", tipo: 'Casa', finalidade: 'Venda', cidade: 'São João', bairro: 'Centro', preço: 400000.00 },
];

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
                <img class="image" src=${propriedade.img} />
                <h1>${propriedade.tipo} - ${propriedade.finalidade}</h1>
                <p>${propriedade.cidade} - ${propriedade.bairro}</p>
                <h2>R$ ${propriedade.preço.toFixed(2)}/mês </h2>
            `;
        } else {
            elementoPropriedade.innerHTML = `
            <img class="image" src=${propriedade.img} />
            <h1>${propriedade.tipo} - ${propriedade.finalidade}</h1>
            <p>${propriedade.cidade} - ${propriedade.bairro}</p>
            <h2>R$ ${propriedade.preço.toFixed(2)}</h2>
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


