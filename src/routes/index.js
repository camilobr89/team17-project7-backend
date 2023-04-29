const { Router } = require('express');


const movie = require('./movie.route.js');
const genre = require('./genres.router.js');
const category = require('./category.router.js');
const review = require('./review.router.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/movies', movie);
router.use('/genres', genre);
router.use('/categories', category);
router.use('/reviews', review);



module.exports = router;