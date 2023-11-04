import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// }).promise();

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "12345678",
    database: "spotify",
}).promise();

db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão com o banco de dados MySQL estabelecida.');
    }
  });
  
export default db;