require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');

const allroutes = require('./routes/index');

connection();

app.use(express.json());    
app.use(cors());

//Routes
app.use('/api/v1/emcms/', allroutes);

const port = process.env.PORT || 5050;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));