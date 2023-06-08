const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllGames } = require("../controllers/getGames")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/videogames", getAllGames)
// router.get('/videogames/:gameId', (req, res) => {

// });

// router.get('/videogames/name?="..."', (req, res) => {

// });

// router.post('/videogames', (req, res) => {

// });

// router.get('/genres', (req, res) => {
    
// });

module.exports = router;
