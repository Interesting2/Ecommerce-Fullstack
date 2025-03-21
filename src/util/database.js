const { Pool } = require('pg');

const pool = new Pool({
	user: "postgres",
	password: "08051135",
	host: "localhost",
	port: "5432",
	database: "list_of_all_products"
});

// // Using pool instead of client
// pool.connect()
// 	.then(() => console.log("Connection Success"))
// 	.then(() => pool.query("SELECT * FROM ecom_products.products"))
// 	.then(results => console.table(results.rows))
// 	.then(() => pool.query("SELECT * FROM ecom_products.products WHERE category = $1", ['clothing']))
// 	.then(results => console.table(results.rows))
// 	.catch(e => console.error('Query Error:', e))
// 	.finally(() => pool.end());

exports.pool = pool;
