exports.up = function(knex, Promise) {
  return knex.schema.createTable("visitors", tbl => {
    tbl
      .uuid("id")
      .primary()
      .notNullable();
    tbl.integer("requests_count").defaultTo(0);
    tbl.string("email");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("visitors");
};
