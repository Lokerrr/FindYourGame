const express = require("express");
const router = express.Router();

const { getAllGames } = require("../controllers/getGames")

router.get("/allGames", getAllGames)

module.exports= router