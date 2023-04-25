import { Router } from 'express'
import { movieController } from '../controllers/index.js'

export const movieRouter = Router()

movieRouter.get('/', movieController.getAll)
