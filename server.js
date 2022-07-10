// require express
const express = require('express')

//configuration for environment variables and initialize express app
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//make homepage route
app.get('/',(req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})
//create route to the breads page
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// listen for server to stay open which will be a function that will log the port
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})