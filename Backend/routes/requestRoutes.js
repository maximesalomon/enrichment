const express = require("express");
const uuidv4 = require("uuid/v4");
const bodyParser = require("body-parser");

const clearbit = require("clearbit")("sk_682083b708dd971ac5ef22661babf1cd");

const DB = require("../data/helpers");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// POST request
router.post("/", (req, res) => {
  const id = req.body.visitor_id;
  const email = req.body.email; // create request from request body

  DB.findVisitorById(id)
    .then(visitor => {
      if (visitor.requests_count < 5) {
        clearbit.Enrichment.find({ email: email, stream: true })
          .then(enrichment => {
            // Clearbit has enrich visitor Enrichment
            res.status(200).json(enrichment);
          })
          .then(res => {
            DB.updateVisitorRequestsCount(id);
          })
          .catch(err => {
            res.status(500).json({ message: "Failed to update visitor!" });
          });
      } else {
        res.send(`You have used your 5 free credits!`);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to complete request!" });
    });
});

module.exports = router;
