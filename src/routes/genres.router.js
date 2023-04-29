const { Router } = require('express');
const { getGenres, postGenres, putGenres, getGenresById, deleteGenres } = require('../controllers/genres.controller.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getGenres);
router.get('/:id', getGenresById);
router.post('/create', postGenres);
router.put('/update/:id', putGenres);
router.delete('/delete/:id', deleteGenres);


module.exports = router;