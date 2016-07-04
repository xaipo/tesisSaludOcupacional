/**
 * Created by xaipo on 7/4/2016.
 */
var restful= require('node-restful');
var mongoose= restful.mongoose;

var categoriaSchema = new mongoose.Schema({


    paciente : mongoose.Schema.ObjectId,
    nombre_empresa:  String,
    naturaleza_lesion:  String,
    parte_cuerpo_afectada: String,
    dias_incapcidad: String,
    secuelas:  String




});


module.exports= restful.model('historiaClinica',categoriaSchema);