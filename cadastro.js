

const files = document.getElementById('files');
const upload = document.getElementById('upload');
const statuss = document.getElementById('status');

upload.addEventListener('click', async () => {
    statuss.innerHTML = 'Uploading...';

    const file = files.files[0]; // Supondo que só um arquivo seja enviado por vez

    if (!file) {
        statuss.innerHTML = 'Nenhum arquivo selecionado!';
        return;
    }

    const formData = new FormData();
    const data = Date.now();
    const nome = `${data}.${file.name}`
    formData.append("file", file);
    formData.append("fileName", nome);

    try {
        const response = await fetch('http://localhost:3000/propriedades', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        statuss.innerHTML = 'Arquivo enviado com sucesso!';
    } catch (error) {
        console.error('Erro ao enviar o arquivo:', error);
        statuss.innerHTML = 'Falha ao fazer upload do arquivo.';
    }
});


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
const submitBtn = document.getElementById("upload");

function updateSubmitBtn() {
    const requiredFields = form.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        submitBtn.className = 'register';
    } else {
        submitBtn.className = 'register-disabled';
    }
}

form.addEventListener('input', updateSubmitBtn);

updateSubmitBtn();

async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
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
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
        console.log("cadastrdo com sucesso");
        window.alert("Cadastrado com sucesso!");
        debugger
        // window.location.reload();
    } catch (error) {
        window.alert("Falha ao cadastrars!");
    }
}

const exampleForm = document.getElementById("example-form");
exampleForm.addEventListener("submit", handleFormSubmit);

