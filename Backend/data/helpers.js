const db = require("./db");

const createVisitor = visitor => {
  return db("visitors").insert(visitor);
};

const findVisitorById = id => {
  return db("visitors")
    .where({ id })
    .first();
};

const updateVisitorRequestsCount = id => {
  return db("visitors")
    .where({ id })
    .first()
    .then(visitor => {
      const updated_visitor = {
        id: id,
        requests_count: (visitor.requests_count += 1)
      };
      return db("visitors")
        .where({ id })
        .first()
        .update(updated_visitor);
    });
};

module.exports = {
  findVisitorById,
  createVisitor,
  updateVisitorRequestsCount
};
