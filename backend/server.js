const express = require("express");

const visitorRoutes = require("./routes/visitorRoutes");

const server = express();
const PORT = process.env.PORT || 7000;

server.use("/visitors", visitorRoutes);

// Server listening
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
