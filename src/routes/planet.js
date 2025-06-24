const express = require("express");
const router = express.Router();
const { getRepository } = require("typeorm");
const Planet = require("../models/Planet");

router.get("/", async (req, res) => {
  try {
    const planetRepo = getRepository("Planet");
    const planets = await planetRepo.find();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener planetas", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const planetRepo = getRepository("Planet");
    const planet = await planetRepo.findOne(req.params.id);
    if (!planet) {
      return res.status(404).json({ message: "Planeta no encontrado" });
    }
    res.json(planet);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener planeta", error });
  }
});

module.exports = router;
