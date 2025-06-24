const express = require("express");
const router = express.Router();
const { getRepository } = require("typeorm");
const People = require("../models/People");

router.get("/", async (req, res) => {
  try {
    const peopleRepo = getRepository("People");
    const people = await peopleRepo.find();
    res.json(people);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener personas", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const peopleRepo = getRepository("People");
    const person = await peopleRepo.findOne(req.params.id);
    if (!person) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener persona", error });
  }
});

module.exports = router;
