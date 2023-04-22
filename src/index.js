import './config/env.js'
import express from 'express';
import cors from 'cors'
import { reviewRouter } from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/reviews', reviewRouter)

// Inicializa el servidor
app.listen(3001);
console.log('Server running on port 3001')