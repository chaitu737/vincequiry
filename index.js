const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const  authentication = require('./routes/authentication')(router);
const config = require('./config/database');
const cors = require('cors');
const Student = require('./models/student');
var app = express();
var port = 3000;

mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('Could not connect to database: ', err);
    }
    console.log('Connected to '+ config.db);
});


app.all('*', (req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
      res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      res.append('Access-Control-Allow-Credentials', true);
      next();
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/authentication', authentication);
// app.use(compress({
//     flush: require('zlib').Z_SYNC_FLUSH
//   }))
//   .use(conditional())
//   .use(etag())
app.get('/',(req,res)=>{
    res.send('Project is ready')
});



app.listen(port,()=>{
    console.log('listening');
});

