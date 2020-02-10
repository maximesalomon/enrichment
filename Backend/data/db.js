const knex = require('knex');
const config = require('../knexfile');

const knexConfig = config[process.env.NODE_ENV || 'development'];
const db = knex(knexConfig);

module.exports = db;