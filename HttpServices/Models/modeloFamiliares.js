/**
 * Created by xaipo on 4/6/2016.
 */
var restful= require('node-restful');
var mongoose= restful.mongoose;

var categoriaSchema = new mongoose.Schema({

    patologia_cie10: Array,
    parentezco: Array,

});


module.exports= restful.model('familiares',categoriaSchema);