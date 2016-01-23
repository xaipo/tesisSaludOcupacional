var restful= require('node-restful');
var mongoose= restful.mongoose;

var productSchema = new mongoose.Schema({
	
	codigo : String,
	descripcion: String,
	precio: Number,
	idCategoria: Array
	
});

module.exports= restful.model('Productos',productSchema);


