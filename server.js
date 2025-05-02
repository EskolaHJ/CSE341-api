// server.js
require("dotenv").config();

const express = require("express");
const nameRoute = require("./routes/nameRoute");

const app = express();
const PORT = process.env.PORT || 3000;

// mount our “home” route
app.use("/", nameRoute);

// catch-all for 404s
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
