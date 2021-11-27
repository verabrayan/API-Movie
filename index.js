require('dotenv').config();
const express = require('express');
const moviesRouter = require('./router/movies')
const database = require('./database')
const app = express();

//settings
app.set('port',process.env.PORT||3000);

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//Routes
//productos
app.use('/movies',moviesRouter)
//usuarios



app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})