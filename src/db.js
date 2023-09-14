const { type } = require("os");

//connection pool
require("dotenv").config();
async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgresql://postgres:123@localhost:5432/obi2023",
  });
  const client = await pool.connect();

  // console.log(res.rows[0]);
  // client.release();

  global.connection = pool;
  return pool.connect();
}

connect();

//querys
async function getAll() {
  const client = await connect();
  const res = await client.query("select * from schemaobi.fato");
  return res.rows;
}

async function getOne(id) {
  const client = await connect();
  const res = await client.query(`select * from schemaobi.fato WHERE id=${id}`);
  return res.rows;
}
// exportar funções
module.exports = {
  getAll,
  getOne,
};
