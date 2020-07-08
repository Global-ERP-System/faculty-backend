const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const app = express();

const academicsRoutes = require('./routes/academics-routes');
const profileRoutes = require('./routes/profile-routes');
const HttpError = require('./models/http-error');

app.use(bodyParser.json());

app.use('/api/faculty/academics',academicsRoutes);
app.use('/api/faculty/profile',profileRoutes);
// app.use((req,res,next) => {
//     const error = new HttpError('couldnt find this route',404);
//     throw error;
// });


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
