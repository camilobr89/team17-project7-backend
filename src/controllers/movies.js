import { Movie } from '../models/index.js'
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op

export const getAll = async (req, res, next) => {
  try {
    const { title, director } = req.query

    let movies = []

    if (title || director) {
      movies = await Movie.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`
          },
          director: {
            [Op.like]: `%${director}%`
          }
        }
      })
    } else {
      movies = await Movie.findAll()
    }

    res.json(movies)
  } catch (error) {
    throw new Error(error)
  }
}
