const propertyModel = require('../models/propertyModel');
const path = require('path');
const mv = require('mv');
const fileUpload = require('express-fileupload');
const fs = require("fs");



async function getPropriedades(req, res) {
    try {
        const propriedades = await propertyModel.selectProperties();
        res.json(propriedades);
    } catch (err) {
        console.error('Erro ao buscar propriedades:', err);
        res.status(500).send('Erro ao buscar propriedades.');
    }
}

async function addPropriedades(req, res) {

    try {
        if (!req.files || !req.files.foto) {
            return res.status(400).send('Nenhum arquivo foi enviado.');
        }

        const total = Array.isArray(req.files.foto) ? req.files.foto.length : 1;
        const fotos = [];

        for (let i = 0; i < total; i++) {
            const file = Array.isArray(req.files.foto) ? req.files.foto[i] : req.files.foto;
            console.log(file)

            const data = Date.now();
            const nomeArquivo = `${data}-${file.name}`;
            const filePath = path.join("uploads", nomeArquivo);
            await file.mv(filePath);

            fotos.push({ nomeArquivo });
        }

        await propertyModel.insertProperties({ ...req.body }, fotos);

        res.status(200).json({
            message: "Propriedade e foto cadastradas com sucesso",
        });
    } catch (error) {
        console.error('Erro ao fazer upload do arquivo:', error);
        res.status(500).send('Erro ao fazer upload dos arquivos.');
    }
}

module.exports = {
    getPropriedades,
    addPropriedades,
};
