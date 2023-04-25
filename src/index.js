import './config/env.js'
import express from 'express'
import cors from 'cors'
import { movieRouter, reviewRouter } from './routes/index.js'

const app = express()

app.use(cors())
//middlewares
app.use(express.json());// datos tipo json
app.use(express.urlencoded({extended:false})); // con esto solo recibiremos datos simples string

//routes
app.use(require('./routes/indes'));
app.use('/api/reviews', reviewRouter)
app.use('/api/movies', movieRouter)

// Inicializa el servidor
app.listen(3000)
console.log('Server running on port 3000')