const express = require("express");
const router = express.Router();
const { getRepository } = require("typeorm");
const Favorite = require("../models/Favorite");
const User = require("../models/User");
const People = require("../models/People");
const Planet = require("../models/Planet");

// Agregar favorito persona
router.post("/people/:userId/:peopleId", async (req, res) => {
  try {
    const userRepo = getRepository("User");
    const peopleRepo = getRepository("People");
    const favoriteRepo = getRepository("Favorite");

    const user = await userRepo.findOne(req.params.userId);
    const person = await peopleRepo.findOne(req.params.peopleId);

    if (!user || !person) {
      return res.status(404).json({ message: "Usuario o Persona no encontrado" });
    }

    const favorite = favoriteRepo.create({ user, people: person });
    await favoriteRepo.save(favorite);

    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar favorito", error });
  }
});

// Agregar favorito planeta
router.post("/planets/:userId/:planetId", async (req, res) => {
  try {
    const userRepo = getRepository("User");
    const planetRepo = getRepository("Planet");
    const favoriteRepo = getRepository("Favorite");

    const user = await userRepo.findOne(req.params.userId);
    const planet = await planetRepo.findOne(req.params.planetId);

    if (!user || !planet) {
      return res.status(404).json({ message: "Usuario o Planeta no encontrado" });
    }

    const favorite = favoriteRepo.create({ user, planet });
    await favoriteRepo.save(favorite);

    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar favorito", error });
  }
});

// Eliminar favorito por id
router.delete("/:favoriteId", async (req, res) => {
  try {
    const favoriteRepo = getRepository("Favorite");
    const favorite = await favoriteRepo.findOne(req.params.favoriteId);

    if (!favorite) {
      return res.status(404).json({ message: "Favorito no encontrado" });
    }

    await favoriteRepo.remove(favorite);

    res.json({ message: "Favorito eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar favorito", error });
  }
});

module.exports = router;
