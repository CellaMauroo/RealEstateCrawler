let index = 0

function getId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}


async function mostrarDetalhesPropriedade() {
    const id = getId();
    const res = await fetch(`http://localhost:3000/propriedades/${id}`);
    propriedade = await res.json()

    document.getElementById('image').src = `../backend/uploads/${propriedade.images}`
    document.getElementById('property-title').textContent = `${propriedade.tipo} - ${propriedade.finalidade}`;
    if (propriedade.finalidade === "Aluguel") {
        document.getElementById('property-preco').textContent = `R$ ${propriedade.preco}/mês`;
    } else {
        document.getElementById('property-preco').textContent = `R$ ${propriedade.preco}`;
    }
    document.getElementById('property-endereco').textContent = `${propriedade.rua}, ${propriedade.numero}, ${propriedade.bairro}, ${propriedade.cidade}`;
    document.getElementById('tamanho').textContent = `Área:${propriedade.area} m2`;
    document.getElementById('location').textContent = `${propriedade.bairro} - ${propriedade.cidade}`;
    const infosDetalhes = document.getElementById('infos-detalhes');
    infosDetalhes.innerHTML = '';




    // propriedade.infos.forEach(info => {
    //     const label = document.createElement('label');
    //     label.classList.add('background-box');
    //     label.textContent = info;
    //     infosDetalhes.appendChild(label);
    // });
}

document.addEventListener('DOMContentLoaded', mostrarDetalhesPropriedade);

function updateImg(i) {
    const img = document.getElementById('image');
    const imagens = propriedade.images[i];
    img.src = imagens;
}

function nextImg() {
    const imagens = propriedade.images;
    index++;
    if (index >= imagens.length) {
        index = 0;
    }
    updateImg(index);
}

function prevImg() {
    const imagens = propriedade.images;
    index--;
    if (index < 0) {
        index = imagens.length - 1;
    }
    updateImg(index);
}

updateImg(index)


// var modal = document.getElementById("myModal");

// var img = document.getElementById("image");
// var modalImg = document.getElementById("img01");
// img.onclick = function () {
//     modal.style.display = "block";
//     const id = getId();
//     const imagens = propriedades[id - 1].img[index];
//     modalImg.src = imagens;
// }
// function modalUpdate(i) {
//     const id = getId();
//     const imagens = propriedades[id - 1].img[i];
//     modalImg.src = imagens;
// }

// function modalNext() {
//     const id = getId();
//     const imagens = propriedades[id - 1].img;
//     index++;
//     if (index >= imagens.length) {
//         index = 0;
//     }
//     modalUpdate(index);
// }

// function modalPrev() {
//     const id = getId();
//     const imagens = propriedades[id - 1].img;
//     index--;
//     if (index < 0) {
//         index = imagens.length - 1;
//     }
//     modalUpdate(index);
// }
// // modalUpdate(index)

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function () {
//     modal.style.display = "none";
// }

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
