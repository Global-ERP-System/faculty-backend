const express = require('express');
const bodyParser =require('body-parser');

const academicsRoutes = require('./routes/academics-routes');
const profileRoutes = require('./routes/profile-routes');
const app = express();


//middleware
app.use('/api/faculty/academics',academicsRoutes);

// app.use('/api/faculty/profile',profileRoutes);

app.listen(5000);

