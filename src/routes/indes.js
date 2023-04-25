const {Router} = require ('express');
const router = Router();
const { getMovies,createMovies,getMoviesById,deletMoviesById,updateMoviesId} = require('../controllers/index.controller');

// Diseña "APIS" en el sistema para que el equipo de Frontend pueda enviar y recibir información de películas al Backend. 
// Cada "API" debe permitir hacer una acción específica: agregar una película nueva, modificar una existente, eliminar 
// una o mostrar la información de una o varias películas.

router.get('/Movies',getMovies);
router.post('/Movies',createMovies);
router.get('/Movies/:id',getMoviesById);
router.delete('/Movies/:id',deletMoviesById);
router.put('/Movies/:id',updateMoviesId);



module.exports = router;