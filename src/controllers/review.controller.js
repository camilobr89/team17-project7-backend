const { Reviews } = require('../db.js');

const getReviews = async (req, res) => {

    try {
        const reviews = await Reviews.findAll();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// obtenemos generos por id

const getReviewsById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const reviews = await Reviews.findByPk(id);
        if (!reviews) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// post en la base de datos

const postReviews = async (req, res) => {

    try {
        const { rating, review, movieMovieId } = req.body;
        const newReview = await Reviews.create({
            rating,
            review,
            movieMovieId
        });
        res.status(201).json(newReview);

    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

//put en la base de datos

const putReviews = async (req, res) => {

    try {
        const { id } = req.params;
        const { rating, review, movieMovieId } = req.body;
        const reviews = await Reviews.findByPk(id);
        if (!reviews) {
            return res.status(404).json({ error: 'Review not found' });
        }
        const updatedReview = await reviews.update({
            rating,
            review,
            movieMovieId
        });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete en la base de datos

const deleteReviews = async (req, res) => {

    try {
        const { id } = req.params;
        const reviews = await Reviews.findByPk(id);
        if (!reviews) {
            return res.status(404).json({ error: 'Review not found' });
        }
        await reviews.destroy();
        res.status(200).json({ message: 'Review deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getReviews, getReviewsById, postReviews, putReviews, deleteReviews };