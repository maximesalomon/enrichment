exports.up = function(knex, Promise) {
  return knex.schema.createTable("requests", tbl => {
    tbl
      .uuid("id")
      .primary()
      .notNullable();
    tbl
      .uuid("visitor_id")
      .references("id")
      .inTable("visitors")
      .notNullable();
    tbl.string("type", 128).notNullable();
    tbl.string("data", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("requests");
};
