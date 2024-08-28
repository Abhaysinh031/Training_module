const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'training_module'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected...');
});

module.exports = db;
