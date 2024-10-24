require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.use(express.json())

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
    await db.insertProperties(req.body);
    res.sendStatus(201);
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