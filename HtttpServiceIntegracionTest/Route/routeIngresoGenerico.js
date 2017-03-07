/**
 * Created by xaipo on 8/25/2016.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/SaludOcupacional';


router.post('/ingresar', function (req, res) {
    //console.log(req.param('var1'));
    //res.send(req.param('var1'));
    // var vec= req.param('items');
    var obj = {
        nombre_tabla: req.body.nombre_tabla,
        token: req.body.tk,
        docum: req.body.campos,
       // campos: req.body.campos


    }
    //obj.campos.push({
     //   nombre: "historia_clinica",
      //  tipo_dato: "ObjectId"
    //})
    console.log(obj);

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);


        // console.log(req.body);
        var collection = db.collection('tabla').findOne({"token": obj.token}, function(err, result) {
         var resp=assert.equal(null, err);
           if( result!=null){

               var flag =true;
                var tabla=result;
               console.log(tabla);
                var n= obj.docum.length;
               for(var i=0;i<n;i++){

                    if(tabla.campos.indexOf(obj.docum[i].nombre)){

                        console.log('si existe');
                    }

               }


                 //db.collection(obj.nombre_tabla).insert(obj.campos, function(err, result) {



              // });
           }
        //  res.send('Info ingresada');

        db.close();

       /* MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            // insertDocument(db, function() {





            db.createCollection(obj.nombre_tabla, {});*/

            //console.log(req.param('items'));
            res.send('ingresado');
            // db.collection(req.param('table')).insertOne(req.body);
            // db.close();
            //  });
           // });
        });

        db.close();
    });
});

module.exports = router;