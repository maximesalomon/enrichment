const express = require("express");
const uuidv4 = require("uuid/v4");
const bodyParser = require("body-parser");

const DB = require("../data/helpers");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// GET visitor by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  DB.findVisitorById(id)
    .then(visitor => {
      if (visitor) {
        res.status(200).json(visitor);
      } else {
        res
          .status(404)
          .json({ message: "Could not find visitor with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get visitor." });
    });
});

// POST visitor
router.post("/", (req, res) => {
  const id = uuidv4();
  const visitor = { id: id };
  // const visitor = req.body; // create visitor from request body
  DB.createVisitor(visitor) // create new visitor
    .then(success => {
      res.send(id);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save visitor!" });
    });
});

// PUT visitor by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const visitor = req.body;
  DB.findVisitorById(id)
    .update(visitor)
    .then(success => {
      if (success === 1) {
        res.send(`Visitor has been successfully updated!`);
      } else {
        res
          .status(404)
          .json({ message: "Could not find visitor with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update visitor!" });
    });
});

module.exports = router;
