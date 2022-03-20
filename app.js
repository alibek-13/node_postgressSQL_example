
const express = require('express')
const cors = require ('cors')
const userRouter = require ('./router/user.router.js')
const postRouter = require ('./router/post.router.js')

const PORT =  5000;
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