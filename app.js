const express = require('express');
const bodyParser =require('body-parser');
const app = express();

const academicsRoutes = require('./routes/academics-routes');
const profileRoutes = require('./routes/profile-routes');

app.use('/api/faculty/academics',academicsRoutes);
app.use('/api/faculty/prfile',profileRoutes);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server initiated!");
});