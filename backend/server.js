const express = require("./node_modules/express");

const visitorRoutes = require("./routes/visitorRoutes");

const server = express();
const PORT = process.env.PORT || 7000;

server.use("/visitors", visitorRoutes);

// Server listening
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// API Home
server.use("/", (req, res) => {
  res.status(200).send(`<h1>Enrichment 🛠</h1>`);
});