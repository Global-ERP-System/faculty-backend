//const fs = require('fs');
//const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

// app.use('/uploads/images',express.static(path.join('uploads','images')));

const HttpError = require('./models/http-error');

const academicsRoutes = require('./routes/academics-routes');
const profileRoutes = require('./routes/profile-routes');
const userRoutes = require('./routes/user-routes'),
timetableRoutes = require('./routes/timetable-routes');

app.use('/api/faculty/academics',academicsRoutes);
app.use('/api/faculty/profile',profileRoutes);
// app.use('api/faculty/academics/timetable',timetableRoutes);
// app.use('/api/faculty/users',userRoutes);


app.use((error,req,res,next) => {
    // if(req.file){
    //     fs.unlink(req.file.path, (err) => {
    //         console.log(err);
    //     });
    //}
    if(res.headerSent){
        return next (error);
    }
    res.status(error.code || 500).json({message :error.message || 'An unknown error occured!' });
});

//.connect('mongodb+srv://rohan:qkLzF0DOjiTxbVA3@cluster0-ri8lk.mongodb.net/facultyWireFrame?retryWrites=true&w=majority'

mongoose
    .connect('mongodb+srv://rohan:oZlaW1ac1lGv1itM@cluster0-ri8lk.mongodb.net/facultyWireFrame?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true  })
    .then(() => {
        app.listen( 5000, ()=>{
            console.log("Server initiated!");
        });
    })
    .catch(err => {
        console.log(err);
    });
