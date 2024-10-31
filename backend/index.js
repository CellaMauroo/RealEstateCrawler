require("dotenv").config();
const express = require("express");
const db = require("./db");
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({
        message: "funcionando"
    })
})

app.get("/propriedades/:id", async (req, res) => {
    const propriedade = await db.selectProperty(req.params.id);
    res.json(propriedade)
})

app.get("/propriedades", async (req, res) => {
    const propriedades = await db.selectProperties();
    res.json(propriedades)
})

app.post("/propriedades", async (req, res) => {
    console.log(req.body)
    const tipo = req.body.tipo
    const finalidade = req.body.finalidade
    const preco = req.body.preco
    const area = req.body.area
    const rua = req.body.rua
    const numero = req.body.numero
    const bairro = req.body.bairro
    const cidade = req.body.cidade

    //Validation - Tipo

    if (!tipo) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'tipo' field is required and cannot be null, undefined or empty."
        })
    }

    if (tipo !== "Apartamento" && tipo !== "Casa") { //Trocar validação para usar como base os tipos existentes no banco
        return res.status(400).send({
            error: "Invalid_data_error",
            message: "The 'tipo' field must be 'Apartamento' or 'Casa'." //Trocar mensagem quando alterar a validação 
        })
    }

    //Validation - Finalidade

    if (!finalidade) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'finalidade' field is required and cannot be null, undefined or empty."
        })
    }

    if (finalidade !== "Venda" && finalidade !== "Aluguel") {
        return res.status(400).send({
            error: "Invalid_data_error",
            message: "The 'finalidade' field must be 'Venda' or 'Aluguel'."
        })
    }

    //Validation - Preço

    if (!preco) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'preco' field is required and cannot be null, undefined or empty."
        })
    }

    if (isNaN(preco)) {
        return res.status(400).send({
            error: "Invalid_data_error",
            message: "The 'preco' field must be a number."
        })
    }

    if (preco < 0) {
        return res.status(400).send({
            error: "Min_value_error",
            message: "The 'preco' value must be greater than 0."
        })
    } else if (preco > 10000000000) {
        return res.status(400).send({
            error: "Max_value_error",
            message: "There's no way your property value is higer than 10bi."
        })
    }

    //Validation - Área

    if (!area) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'area' field is required and cannot be null, undefined or empty."
        })
    }

    if (isNaN(area)) {
        return res.status(400).send({
            error: "Invalid_data_error",
            message: "The 'area' field must be a number."
        })
    }

    if (area < 0) {
        return res.status(400).send({
            error: "Min_value_error",
            messagee: "The 'area' value must be greater than 0."
        })
    } else if (area > 10000) {
        return res.status(400).send({
            error: "Max_value_error",
            messagee: "The 'area' value must be lower than 10000."
        })
    }
    //Validation - Rua

    if (!rua) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'rua' field is required and cannot be null, undefined or empty."
        })
    }
    if (rua.length < 3) {
        return res.status(400).send({
            error: "Min_length_error",
            message: "The 'rua' field length must be higer than 3."
        })
    }
    if (rua.length > 100) {
        return res.status(400).send({
            error: "Min_length_error",
            message: "The 'rua' field length must be lower than 100."
        })
    }


    //Validation - Número

    if (!numero) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'numero' field is required and cannot be null, undefined or empty."
        })
    }
    if (numero.length > 10) {
        return res.status(400).send({
            error: "Max_length_error",
            message: "The 'numero' field length must be lower than 10."
        })
    }
    if (numero.length < 1) {
        return res.status(400).send({
            error: "Max_length_error",
            message: "The 'numero' field length must be higer than 1."
        })
    }

    //Validation - Bairro

    if (!bairro) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'bairro' field is required and cannot be null, undefined or empty."
        })
    }
    if (bairro.length > 100) {
        return res.status(400).send({
            error: "Max_length_error",
            message: "The 'numero' field length must be lower than 100."
        })
    }
    if (bairro.length < 1) {
        return res.status(400).send({
            error: "Max_length_error",
            message: "The 'numero' field length must be higer than 1."
        })
    }

    //Validation - Cidade

    if (!cidade) {
        return res.status(400).send({
            error: "Required_field_error",
            message: "The 'cidade' field is required and cannot be null, undefined or empty"
        })
    }

    if (cidade !== "Dois Vizinhos" && cidade !== "São João") { //Trocar validação para usar como base os tipos existentes no banco
        return res.status(400).send({
            error: "Invalid_data_error",
            message: "The 'cidade' field must be 'Dois Vizinhos' or 'São João'" //Trocar mensagem quando alterar a validação 
        })
    }

    await db.insertProperties(req.body);
    return res.sendStatus(201);
})

app.patch("/propriedades/:id", async (req, res) => {
    await db.updateProperties(req.params.id, req.body);
    res.sendStatus(200);
})
app.delete("/propriedades/:id", async (req, res) => {
    await db.deleteProperty(req.params.id);
    res.sendStatus(204)
})

app.listen(port);

console.log(`Backend rodando na porta ${port}`)