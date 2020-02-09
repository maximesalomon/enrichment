const express = require("../node_modules/express");

const router = express.Router();

// GET visitor by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`hello from the /GET /visitors/${id} endpoint.`);
});

//POST visitor
router.post("/", (re, res) => {
  res.status(200).send(`hello from the /POST /visitors endpoint.`);
});

module.exports = router;