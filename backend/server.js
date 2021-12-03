const path = require('path')
const express = require('express')
const connectDB = require('./config/db')
const Table = require('./models/itemModel')
require('dotenv').config()

connectDB()
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.get('/api/items',async (req,res)=>{
    const items = await Table.find({})
    res.json(items)
})

app.put('/api/plus/:id', async (req,res)=>{
    const item = await Table.findByIdAndUpdate(req.params.id,{$inc:{qty:+1}})
    res.json(item)
})

app.put('/api/subtract/:id', async (req,res)=>{
    const item = await Table.findByIdAndUpdate(req.params.id,{$inc:{qty:-1}})
    res.json(item)
})

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))