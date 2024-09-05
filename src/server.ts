import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { create } from 'domain'
import { createNewUser, singin } from './handlers/user'

const app = express() 

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", (req, res) => {
    console.log("Hey from Express")
    res.status = 200
    res.json({message: "hello"})
})

app.use('/api', protect,  router)

app.post('/user', createNewUser)
app.post('/signin', singin)

app.use((err, req, res, next) => {
    console.log(err)
    res.json({message: `had an error: ${err.message}`})
  })

export default app