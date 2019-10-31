const express = require('express');
const config = require('./config/config');
const morgan = require('morgan');
const app = express();
// Database
require('./database/database');


//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//debugging
app.use(morgan('dev'));

//Routes
const routes=require('./routes/routes')
app.use(routes)

//error handler
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Server Error')
});


app.listen(config.port, console.log(`Server runing on port ${config.port} \n Press ctr+c to exit`))