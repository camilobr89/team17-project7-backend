const { Router } = require('express');

const { getCategories, postCategories, putCategories, getCategoriesById, deleteCategories } = require('../controllers/categories.controller.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getCategories);
router.get('/:id', getCategoriesById);
router.post('/create', postCategories);
router.put('/update/:id', putCategories);
router.delete('/delete/:id', deleteCategories);



module.exports = router;