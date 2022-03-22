import express from'express';
import cors from 'cors';
import userRouter from './router/user.router.js'
import postRouter from './router/post.router.js'

const PORT = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth', userRouter)
app.use('/api', postRouter)

const Start = ()=>{
   app.listen(PORT, ()=>{
       console.log(`server running ${PORT}`)
   }) 
}

Start();