import app from './server'
import * as dotenv from 'dotenv'
dotenv.config()


app.listen(5100, () => {
    console.log("Running on http://localhost:5100")
})