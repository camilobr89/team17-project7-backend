const { Router } = require('express');
const { getGenres, postGenres, putGenres, getGenresById, deleteGenres } = require('../controllers/index.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/genres', getGenres);
router.get('/genres/:id', getGenresById);
router.post('/genres/create', postGenres);
router.put('/genres/update/:id', putGenres);
router.delete('/genres/delete/:id', deleteGenres);


module.exports = router;