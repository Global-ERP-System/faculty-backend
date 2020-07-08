const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const app = express();

const academicsRoutes = require('./routes/academics-routes');
const profileRoutes = require('./routes/profile-routes');
const HttpError = require('./models/http-error');

app.use(bodyParser.json());

app.use('/api/faculty/academics',academicsRoutes);
app.use('/api/faculty/prfile',profileRoutes);
app.use((req,res,next) => {
    const error = new HttpError('couldnt find this route',404);
    throw error;
});


mongoose
    .connect('mongodb+srv://rohan:mongodb+srv://<username>:<password>@cluster0-ri8lk.mongodb.net/facultyMain?retryWrites=true&w=majority@cluster0-ri8lk.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(() => {
        app.listen(process.env.PORT || 5000, ()=>{
            console.log("Server initiated!");
        });
    })
    .catch(err => {
        console.log(err);
    });
