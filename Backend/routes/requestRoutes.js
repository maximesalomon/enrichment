const express = require("express");
const uuidv4 = require("uuid/v4");
const bodyParser = require("body-parser");

const CLEARBIT_SECRET_API_KEY = process.env.CLEARBIT_SECRET_API_KEY;
const clearbit = require("clearbit")(CLEARBIT_SECRET_API_KEY);

const DB = require("../data/helpers");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// GET request by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  DB.findRequestById(id)
    .then(request => {
      if (request) {
        res.status(200).json(request);
      } else {
        res
          .status(404)
          .json({ message: "Could not find request with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get request." });
    });
});

// POST request
router.post("/", (req, res) => {
  const id = req.body.visitor_id;
  const request = {
    id: uuidv4(),
    visitor_id: id,
    type: req.body.type,
    data: req.body.data
  }

  DB.findVisitorById(id)
    .then(visitor => {
      if (visitor.requests_count < 5) {
        DB.createRequest(request).then(request => {
          clearbit.Enrichment.find({ email: req.body.data, stream: true })
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
        })
      } else {
        res.send(`You have used your 5 free credits!`);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to complete request!" });
    });
});

module.exports = router;
