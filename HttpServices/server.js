// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express = require('express');
var mongoose=  require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="MongoDb">
//mongoose.connect('mongodb://localhost/TesisSaludOcupacional');
//mongoose.connect('xaipo:xaipo14@ds064278.mlab.com:64278/MongoLab-l');



mongoose.connect('mongodb://localhost/TesisSaludOcupacional', function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a MongoDB');
    }
});
// </editor-fold>



// <editor-fold defaultstate="collapsed" desc="Express">
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());// permite angular interactuar
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Routes">
app.use('/api',require('./Routes/apiUsuarios'));
app.use('/api',require('./Routes/apiEmpresa'));
app.use('/api',require('./Routes/apiDependencia'));
app.use('/api',require('./Routes/apiJornada'));
app.use('/api',require('./Routes/apiMateriaPrima'));
app.use('/api',require('./Routes/apiHerramienta'));
app.use('/api',require('./Routes/apiMaquinaria'));
app.use('/api',require('./Routes/apiProteccion'));
app.use('/api',require('./Routes/apiProvincia'));
// </editor-fold >

// <editor-fold defaultstate="collapsed" desc="Server Run">
app.listen(3000);
console.log("servidor ejecutando en el puerto 3000");

// </editor-fold>