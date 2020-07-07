const express = require('express');
const bodyParser =require('body-parser');

const academicsRoutes = require('./routes/academics-routes');

const app = express();

app.use('/api/faculty/academics',academicsRoutes);

app.listen(5000);