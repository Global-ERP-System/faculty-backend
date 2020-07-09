const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

const HttpError = require('./models/http-error');

const academicsRoutes = require('./routes/academics-routes');
const profileRoutes = require('./routes/profile-routes');

app.use('/api/faculty/academics',academicsRoutes);
app.use('/api/faculty/profile',profileRoutes);

app.use((error,req,res,next) => {
    if(res.headerSent){
        return next (error);
    }
    res.status(error.code || 500).json({message :error.message || 'An unknown error occured!' });
});


mongoose
    .connect('mongodb+srv://rohan:qkLzF0DOjiTxbVA3@cluster0-ri8lk.mongodb.net/facultyWireFrame?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  })
    .then(() => {
        app.listen( 5000, ()=>{
            console.log("Server initiated!");
        });
    })
    .catch(err => {
        console.log(err);
    });
