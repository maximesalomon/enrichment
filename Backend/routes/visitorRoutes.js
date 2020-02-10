const express = require("../node_modules/express");
const db = require("../data/db");
const uuidv4 = require('uuid/v4');

const router = express.Router();


// GET visitor by id
router.get("/:id", (req, res) => {
  const id = req.params.id; // get id from the request parameters
  res.status(200).send(`hello from the /GET /visitors/${id} endpoint.`);
});

// POST visitor
router.post("/", (req, res) => {
  const id = uuidv4();
  const visitor = {
    id: id
  }
  // const visitor = req.body; // create visitor from request body
  db("visitors")
    .insert(visitor) // create new visitor
    .then(success => {
      res.send(id);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save visitor!" });
    });
});


module.exports = router;