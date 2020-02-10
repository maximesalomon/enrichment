const express = require("express");
const uuidv4 = require("uuid/v4");

const DB = require("../data/helpers");
const router = express.Router();

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
  DB.findVisitorById(id)
    .then(visitor => {
      if (visitor.requests_count < 5) {
        DB.updateVisitorRequestsCount(id).then(success => {
          if (success === 1) {
            res.send(`Visitor has been successfully updated!`);
          } else {
            res
              .status(404)
              .json({ message: "Could not find visitor with given id." });
          }
        });
      } else {
        res.send(`You have used your 5 free credits!`);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update signal!" });
    });
});

module.exports = router;
