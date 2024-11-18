require("dotenv").config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

const propertyRoute = require('./routes/propertyRoute');

app.use('/', propertyRoute);

app.listen(port, (err) => {
    if (err) {
        console.error('Erro ao iniciar o servidor:', err);
    } else {
        console.log(`Backend rodando na porta ${port}`);
    }
});

