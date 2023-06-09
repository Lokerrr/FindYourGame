const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getGames = require("./Videogames")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/videogames", getGames)
// router.get('/videogames/:gameId', (req, res) => {

// });

// router.get('/videogames/name?="..."', (req, res) => {

// });

// router.post('/videogames', (req, res) => {

// });

// router.get('/genres', (req, res) => {
    
// });

module.exports = router;
