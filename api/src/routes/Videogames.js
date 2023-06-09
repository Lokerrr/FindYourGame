const express = require("express");
const router = express.Router();

const { getAllGames, getGamesById } = require("../controllers/getGames")

router.get("/allGames", getAllGames)
router.get("/:id", getGamesById)

module.exports= router