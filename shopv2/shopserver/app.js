const express = require('express');
const app = express();
const mycors = require('./cors');
const bodyParser = require('body-parser');
//const cors = require('cors');
//app.use(cors());
app.use(mycors);
app.use(bodyParser.json());
app.use('/',require('./routes/home'));
app.use('/',require('./routes/user'));
app.listen(1234,()=>{
    console.log('Server Start');
})