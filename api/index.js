const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb+srv://map:map123@cluster0.htoig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=> {
    console.log('connected to the database')
})

const routes = require('./routes')
app = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5000','http://localhost:3000']
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Node js server is running!</h1>")
})

app.use('/api', routes)

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})