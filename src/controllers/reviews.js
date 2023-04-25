import { Review } from '../models/index.js'

export const getAllByMovie = async (req, res, next) => {
  try {
    const { movieId } = req.query

    if (!movieId) {
      return res.status(400).send({
        message: 'The query parameter movieId is required'
      })
    }

    if (movieId && isNaN(movieId)) {
      return res.status(400).send({
        message: 'The parameter movieId must be a number'
      })
    }

    const reviews = await Review.findAll({
      where: {
        movieId
      }
    })

    res.json({
      count: reviews.length,
      reviews,
      rating:
        reviews.reduce((acc, review) => acc + parseInt(review.rating), 0) /
        reviews.length
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).send({
        message: 'The id is required'
      })
    }

    if (id && isNaN(id)) {
      return res.status(400).send({
        message: 'The id must be a number'
      })
    }

    const review = await Review.findByPk(id)

    if (!review) {
      return res.status(404).send({
        message: 'Review not found'
      })
    }

    res.json(review)
  } catch (error) {
    throw new Error(error)
  }
}

export const create = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        message: 'The request body is empty'
      })
    }

    const { movieId, userId, description, rating } = req.body

    if (!movieId || !userId || !rating) {
      return res.status(400).send({
        message: 'The fields movieId, userId and rating are required'
      })
    }

    if (movieId && isNaN(movieId)) {
      return res.status(400).send({
        message: 'The field movieId must be a number'
      })
    }

    if (userId && isNaN(userId)) {
      return res.status(400).send({
        message: 'The field userId must be a number'
      })
    }

    if (rating && isNaN(rating)) {
      return res.status(400).send({
        message: 'The field rating must be a number'
      })
    }

    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).send({
        message: 'The field rating must be 1 to 5'
      })
    }

    const review = await Review.create({
      movieId,
      userId,
      description: description || null,
      rating: rating.toString()
    })

    res.json(review)
  } catch (error) {
    throw new Error(error)
  }
}

export const update = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).send({
        message: 'The id is required'
      })
    }

    if (id && isNaN(id)) {
      return res.status(400).send({
        message: 'The id must be a number'
      })
    }

    if (!req.body) {
      return res.status(400).send({
        message: 'The request body is empty'
      })
    }

    const { movieId, userId, description, rating } = req.body

    if (!movieId || !userId || !rating) {
      return res.status(400).send({
        message: 'The fields movieId, userId and rating are required'
      })
    }

    if (movieId && isNaN(movieId)) {
      return res.status(400).send({
        message: 'The field movieId must be a number'
      })
    }

    if (userId && isNaN(userId)) {
      return res.status(400).send({
        message: 'The field userId must be a number'
      })
    }

    if (rating && isNaN(rating)) {
      return res.status(400).send({
        message: 'The field rating must be a number'
      })
    }

    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).send({
        message: 'The field rating must be 1 to 5'
      })
    }

    const review = await Review.findByPk(id)

    if (!review) {
      return res.status(404).send({
        message: 'Review not found'
      })
    }

    await Review.update(
      {
        movieId,
        userId,
        description: description || null,
        rating: rating.toString()
      },
      {
        where: {
          id
        }
      }
    )

    const reviewUpdated = await Review.findByPk(id)

    res.send(reviewUpdated)
  } catch (error) {
    throw new Error(error)
  }
}

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).send({
        message: 'The id is required'
      })
    }

    if (id && isNaN(id)) {
      return res.status(400).send({
        message: 'The id must be a number'
      })
    }

    const review = await Review.findByPk(id)

    if (!review) {
      return res.status(404).send({
        message: 'Review not found'
      })
    }

    await Review.destroy({
      where: {
        id
      }
    })

    res.status(204).send({
      message: 'Review deleted'
    })
  } catch (error) {
    throw new Error(error)
  }
}
