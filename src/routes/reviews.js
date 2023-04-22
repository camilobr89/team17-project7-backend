import { Router } from 'express'
import { reviewController } from '../controllers/index.js'

export const reviewRouter = Router()

reviewRouter.get('/', reviewController.getAllByMovie)

reviewRouter.get('/:id', reviewController.getById)

reviewRouter.post('/', reviewController.create)

reviewRouter.patch('/:id', reviewController.update)

reviewRouter.delete('/:id', reviewController.remove)
