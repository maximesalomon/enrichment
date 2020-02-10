const express = require("express");
const uuidv4 = require("uuid/v4");
const bodyParser = require("body-parser");

const clearbit = require('clearbit')(CLEARBIT_SECRET_API_KEY);

const DB = require("../data/helpers");
const router = express.Router();

// POST request
router.post("/", (req, res) => {
  const id = req.body.visitor_id;
  const request = req.body // create request from request body
  console.log(request)
  DB.findVisitorById(id)
    .then(visitor => {
      if (visitor.requests_count < 5) {
        clearbit.Enrichment.find({email: 'maxime@croissant.io', stream: true})
          .then(res => {
            console.log(res)
          })
          .catch(function (err) {
            console.error(err);
          })
          .then(request => {
          DB.updateVisitorRequestsCount(id)
          .then(success => {
              // Visitor has been successfully updated!
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
