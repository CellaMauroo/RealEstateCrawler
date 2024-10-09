
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

let form = document.querySelector('form');

function funcaoAlerta() {
    if (form.checkValidity() === true) {
        alert("Enviado com sucesso!")
    }
}

