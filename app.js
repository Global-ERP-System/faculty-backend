const express = require('express');
const bodyParser =require('body-parser');
const app = express();

const academicsRoutes = require('./routes/academics-routes');



app.use('/api/faculty/academics',academicsRoutes);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server initiated!");
});