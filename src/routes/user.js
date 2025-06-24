const express = require("express");
const router = express.Router();
const { getRepository } = require("typeorm");
const User = require("../models/User");
const Favorite = require("../models/Favorite");

router.get("/", async (req, res) => {
  try {
    const userRepo = getRepository("User");
    const users = await userRepo.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
});

// Obtener favoritos de un usuario (id por query o param)
router.get("/:id/favorites", async (req, res) => {
  try {
    const favoriteRepo = getRepository("Favorite");
    const favorites = await favoriteRepo.find({ where: { user: req.params.id } });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener favoritos", error });
  }
});

module.exports = router;
