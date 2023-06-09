const axios = require('axios');
require("dotenv").config();
const KEY = process.env.API_KEY;
const URL = process.env.APIGames;

const getAllGames = async (req, res) => {
    try {
        await axios.get(`${URL}?key=${KEY}`)
        .then((response) => response.data)
        .then(({ results }) => {
          if (results) {
            res.status(200).json(results);
          } else {
            res.status(404).json({ message: "Videogame not found" });
          }
        });
      } catch (error) {
        res.status(500).json({ message: error });
      }
};

const getGamesById = async (req, res) => {
    try {
      const { id } = req.params;
      await axios.get(`${URL}/${id}?key=${KEY}`)
      .then((response) => response.data)
      .then((data) => {
            if (data){
            return res.status(200).json(data);
            } else {
            return res.status(404).json({ message: "ID Videogame not found" });
            }

      });
    } catch (error) {
      res.status(500).json({ message: "error" });
    }
};

module.exports = {getAllGames, getGamesById}