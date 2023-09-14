require("dotenv").config();
const express = require("express");
const db = require("./src/db.js");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/participantes", async (req, res) => {
  const participante = await db.getAll();
  res.send(participante);
});
app.get("/participantes/:id", async (req, res) => {
  const participantes = await db.getOne(req.params.id);
  res.send(participantes);
});

app.listen(port);
