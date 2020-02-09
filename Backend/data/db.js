const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);
console.log(process.env)
module.exports = db;