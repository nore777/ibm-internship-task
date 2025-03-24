import http from 'http'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import logRoute from './routes/logRoute'


if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV is undefined")
}

const PORT = process.env.PORT || 8000

// Initialize express
const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())
app.use(logRoute)

// Start server
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(
    `[${(process.env.NODE_ENV!)}]\nServer started on PORT ${PORT}`
  )
})

// Start MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => { console.log("Connected to the Database") })
  .catch((error) => { console.log(error) });
