/**
 * Created by xaipo on 4/13/2016.
 */
var restful= require('node-restful');
var mongoose= restful.mongoose;

var categoriaSchema = new mongoose.Schema({



    observacion:String,
    respuesta_examen_paraclinico: mongoose.Schema.Types.ObjectId,
    sintomas_cie_10:Array




});


module.exports= restful.model('seleccionado_examenes_paraclinicos',categoriaSchema);