  
exports.up = function(knex, Promise) {
    return knex.schema.createTable("visitors", tbl => {
        tbl.uuid('id').primary();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("visitors");
  };