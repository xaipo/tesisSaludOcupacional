/**
 * Created by xaipo on 8/25/2016.
 */
// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express = require('express');
var mongoose=  require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="MongoDb">
//mongoose.connect('mongodb://localhost/TesisSaludOcupacional');
//mongoose.connect('xaipo:xaipo14@ds064278.mlab.com:64278/MongoLab-l');


//mongoose.connect('mongodb://40.83.182.235/saludOcupacional', function(error){

// </editor-fold>





// <editor-fold defaultstate="collapsed" desc="Express">
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());// permite angular interactuar
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Routes">

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.use('/api',require('./Route/ruteTest'));


// </editor-fold >

// <editor-fold defaultstate="collapsed" desc="Server Run">
app.listen(3001);
console.log("servidor ejecutando en el puerto 3001");

// </editor-fold>