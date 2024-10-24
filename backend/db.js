async function connect() {

    if (global.connection)
        return global.connection.connect();

    const { Pool } = require("pg");
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const property = await pool.connect()
    console.log("criou o pool")

    const res = await property.query("select now()");
    console.log(res.rows[0])
    property.release();

    global.connection = pool;
    return pool.connect;
}

connect();

async function selectProperties() {
    const property = await connect();
    const res = await property.query("SELECT * FROM propriedade");
    return res.rows;
};

async function selectProperty(id) {
    const property = await connect();
    const res = await property.query("SELECT * FROM propriedade WHERE ID=$1", [id]);
    return res.rows;
};


async function insertProperties(propriedade) {
    const property = await connect();
    const sql = "INSERT INTO propriedade (tipo, finalidade, cidade, rua, numero, bairro, preco, area) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);"
    await property.query(sql, [propriedade.tipo, propriedade.finalidade, propriedade.cidade, propriedade.rua, propriedade.numero, propriedade.bairro, propriedade.preco, propriedade.area]);
};

async function updateProperties(id, propriedade) {
    const property = await connect();
    const sql = "UPDATE propriedade SET tipo=$1, finalidade=$2, cidade=$3, rua=$4, numero=$5, bairro=$6, preco=$7, area=$8 WHERE id=$9"
    await property.query(sql, [propriedade.tipo, propriedade.finalidade, propriedade.cidade, propriedade.rua, propriedade.numero, propriedade.bairro, propriedade.preco, propriedade.area, id]);
};

async function deleteProperty(id) {
    const property = await connect();
    const sql = "DELETE FROM propriedade WHERE id=$1"
    await property.query(sql, [id]);
};

module.exports = {
    selectProperties,
    selectProperty,
    insertProperties,
    updateProperties,
    deleteProperty
}
