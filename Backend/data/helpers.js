const db = require("./db");

// Visitors helpers
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
        requests_count: (visitor.requests_count += 1) // update requests_count
      };
      return db("visitors")
        .where({ id })
        .first()
        .update(updated_visitor);
    });
};

// Request helpers
const createRequest = request => {
  return db("requests").insert(request);
};

const findRequestById = id => {
  return db("requests")
    .where({ id })
    .first();
};

module.exports = {
  findVisitorById,
  createVisitor,
  updateVisitorRequestsCount,
  createRequest,
  findRequestById
};
