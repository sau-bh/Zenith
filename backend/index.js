require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test',(req,res)=>{
    res.send('<h1>Hello this is test<h1/>')
})

app.get('/github',(req,res)=>{
    res.send(github);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
