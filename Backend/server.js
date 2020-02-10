const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const visitorRoutes = require("./routes/visitorRoutes");
const requestRoutes = require("./routes/requestRoutes");

const server = express();
const PORT = process.env.PORT || 7000;

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/visitors", visitorRoutes);
server.use("/requests", requestRoutes);

// Server listening
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// API Home
server.use("/", (req, res) => {
  res.status(200).send(`<h1>Enrichment 🛠</h1>`);
});