import express from 'express'
import morgan from 'morgan'
import router from './router'
import cors from 'cors'
import { protect } from './modules/auth'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    console.log("Hello from express")
    res.status(200)
    res.json({day: "Monday"})
})

app.use('/api', protect, router)

export default app
