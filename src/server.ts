import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { create } from 'domain'
import { createNewUser, singin } from './handlers/user'

const app = express() //api for the app

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", (req, res) => {
    console.log("Hey from Express")
    res.status = 200
    res.json({message: "Express"})
})

app.use('/api', protect,  router)

app.post('/user', createNewUser)
app.post('/signin', singin)

export default app