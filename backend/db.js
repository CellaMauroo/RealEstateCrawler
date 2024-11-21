
async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const { Pool } = require("pg");
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();

    const res = await client.query("SELECT NOW()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;

    return pool.connect();
}

module.exports = {
    connect
};
