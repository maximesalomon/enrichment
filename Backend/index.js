const express = require("express");

const server = express();
const PORT = process.env.PORT || 7000;

// Server listening
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// API Homepage
server.get("/", (req, res) => {
  res.send("<h1>Enrichment</h1>");
});
