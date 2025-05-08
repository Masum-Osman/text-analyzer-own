import express from 'express'
import healthRoutes from './api/routes/health'


const app = express()
app.use(express.json())
app.use('/api', healthRoutes)
export default app
