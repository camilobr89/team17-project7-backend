const { Router } = require('express');

const { getMovies, postMovies, putMovies, getMoviesById, deleteMovies } = require('../controllers/movies.controller.js');

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMoviesById);
router.post('/create', postMovies);
router.put('/update/:id', putMovies);
router.delete('/delete/:id', deleteMovies);

module.exports = router;