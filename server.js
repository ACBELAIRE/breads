// require express
const express = require('express')

//configuration for environment variables and initialize express app
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE (must be above routes)
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))


//make homepage route
app.get('/',(req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})
//create route to the breads page
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.render('404')
  })
  
// listen for server to stay open which will be a function that will log the port
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})