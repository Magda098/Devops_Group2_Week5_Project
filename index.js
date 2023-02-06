const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
//import routes
const routes= require('./routes/routes');
const indexRoutes = require('./routes/index');

// Define the port number
const port = process.env.PORT || 3000;
const databaseUrl =process.env.DATABASE_URL ||'';

mongoose.set("strictQuery", false);

//Connecting to the database
mongoose.connect(databaseUrl);
const database=mongoose.connection;//initialize a mongoose connection
//create a listener to the db
database.on('error',(error)=>{
    console.error(error);
})
database.once('connected',()=>{
    console.log('Database connected');
})

// Create an express app,Initialize express
const app = express();
//ensure application only accepts data in json format
app.use(express.json());
//tells the app to use the defines routes
app.use('/', indexRoutes);
app.use('/employee',routes);


app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
