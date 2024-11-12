async function connect() {

    if (global.connection)
        return global.connection.connect();

    const { Pool } = require("pg");
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const property = await pool.connect()

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

async function insertDocs(propriedadeId, fotos) {
    const client = await connect();

    try {
        const sql = "INSERT INTO fotos (propriedade_id, nome_arquivo) VALUES ($1, $2)";

        // Verificação para garantir que `propriedadeId` existe
        if (!propriedadeId) {
            throw new Error("ID da propriedade não foi encontrado. Não é possível inserir fotos.");
        }

        for (const foto of fotos) {
            console.log(`Inserindo foto: ${foto.nomeArquivo} para propriedade ID: ${propriedadeId}`);
            await client.query(sql, [propriedadeId, foto.nomeArquivo]);
        }

        console.log(`Fotos inseridas com sucesso para propriedade ${propriedadeId}`);
    } catch (error) {
        console.error('Erro ao inserir fotos:', error);
        throw error;
    } finally {
        client.release();
    }
}

async function insertProperties(propriedade, fotos) {
    const client = await connect();

    try {

        const sqlInsertProperty = `
            INSERT INTO propriedades (tipo, finalidade, cidade, rua, numero, bairro, preco, area, estado, cep)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id
        `;
        const result = await client.query(sqlInsertProperty, [
            propriedade.tipo,
            propriedade.finalidade,
            propriedade.cidade,
            propriedade.rua,
            propriedade.numero,
            propriedade.bairro,
            propriedade.preco,
            propriedade.area,
            propriedade.estado,
            propriedade.cep,
        ]);

        const propriedadeId = result.rows[0]?.id;
        if (!propriedadeId) {
            throw new Error("Erro ao inserir a propriedade, ID não foi gerado.");
        }

        console.log(`ID da Propriedade inserida: ${propriedadeId}`);


        await insertDocs(propriedadeId, fotos);

        console.log(`Propriedade e fotos inseridas com sucesso, id da propriedade: ${propriedadeId}`);

        return propriedadeId;
    } catch (error) {
        console.error('Erro ao inserir propriedade e fotos:', error);
        throw error;
    } finally {
        client.release();
    }
}



async function updateProperties(id, propriedade) {
    const property = await connect();
    const sql = "UPDATE propriedade SET tipo=$1, finalidade=$2, cidade=$3, rua=$4, numero=$5, bairro=$6, preco=$7, area=$8 WHERE id=$9"
    if (propriedade.tipo === null)
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
