const { Router } = require('express');
const { getReviews, getReviewsById, postReviews, putReviews, deleteReviews } = require('../controllers/review.controller.js');


const router = Router();

router.get('/', getReviews);
router.get('/:id', getReviewsById);
router.post('/create', postReviews);
router.put('/update/:id', putReviews);
router.delete('/delete/:id', deleteReviews);


module.exports = router;