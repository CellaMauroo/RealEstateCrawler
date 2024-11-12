const inputs = document.getElementById("files")
inputs.addEventListener('change', function (inputs) {
    const fileName = inputs.files[0].name || 'Nenhum arquivo selecionado';
    console.log(fileName)
    document.getElementById('file-name').textContent = fileName;
})



const files = document.getElementById('files');
const upload = document.getElementById('upload');

const input = document.getElementById('cep')

IMask(input, { mask: '00000-000' });

input.addEventListener('blur', function (event) {
    fetch(`https://viacep.com.br/ws/${input.value}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert("CEP não encontado.");
            }
        })
})


const form = document.getElementById("example-form");

function updateSubmitBtn() {
    const requiredFields = form.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        upload.className = 'register';
    } else {
        upload.className = 'register-disabled';
    }
}

form.addEventListener('input', updateSubmitBtn);

updateSubmitBtn();



async function postFormData({ url, formData }) {
    const fetchOptions = {
        method: "POST",
        body: formData,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    if (response.status !== 204 && response.headers.get('Content-Type').includes('application/json')) {
        return response.json();
    }

    return null;
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = 'http://localhost:3000/propriedades';

    try {
        const formData = new FormData(form);
        const responseData = await postFormData({ url, formData });
        console.log({ responseData });
        console.log("Cadastrado com sucesso");
        window.alert("Cadastrado com sucesso!");
        window.location.reload();
    } catch (error) {
        console.log("Erro ao cadastrar:", error);
        window.alert("Falha ao cadastrar!");
    }
}


form.addEventListener("submit", handleFormSubmit);

