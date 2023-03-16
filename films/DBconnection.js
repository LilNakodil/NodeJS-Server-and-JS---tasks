
const express=require('express')
const GenreRouter=require('./routes/user.routes')
const filmRouter=require('./routes/film.routes')
const PORT=process.env.PORT || 8080
const app=express()
app.use(express.json())
app.use('/api',GenreRouter)
app.use('/api',filmRouter)
app.listen(PORT,()=>console.log('server started '))