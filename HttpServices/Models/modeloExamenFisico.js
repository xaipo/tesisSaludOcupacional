/**
 * Created by xaipo on 4/11/2016.
 */
var restful= require('node-restful');
var mongoose= restful.mongoose;

var categoriaSchema = new mongoose.Schema({

    tension_arterial:Number,
    frecuencia_cardiaca: Number,
    frecuencia_respiratoria:Number,
    dieztro: Boolean,
    zurdo: Boolean,
    ambidiestro:Boolean,
    talla: Number,
    peso:Number,
    indiceMasaCorporal:Number,
    interpretacion_imc: mongoose.Schema.Types.ObjectId




});


module.exports= restful.model('examen_fisico',categoriaSchema);