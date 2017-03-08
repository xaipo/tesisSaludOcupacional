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
   // console.log(req.body);

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
   // console.log(obj);

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);


        // console.log(req.body);
        var collection = db.collection('tabla').findOne({"token": obj.token, estado:'1'}, function(err, result) {
         var resp=assert.equal(null, err);
           if( result!=null){

               var flag =true;
                var tabla=result;


                var flag=true;
                var n= obj.docum.length;
                var m= tabla.campos.length;
               console.log(n);
               console.log(m);
                var cadena='{'
               for(var i= 0;i<n;i++){

                   var cont=0;

                    for(var j=0;j<m;j++){

                        if(obj.docum[i].nombre==tabla.campos[j].nombre){


                            switch (tabla.campos[j].obligatoriedad){

                                case 'NN' :
                                            if(obj.docum[i].valor==undefined||obj.docum[i].valor==''){
                                            res.send('error campos nulos');

                                            }else{

                                                cadena+='"'+obj.docum[i].nombre+'":"'+obj.docum[i].valor+'",';
                                            }
                                    break;
                                case 'N':
                                         cadena+='"'+obj.docum[i].nombre+'":"'+obj.docum[i].valor+'",';
                                    break;

                            }
                           // console.log(cadena);
                           /* */

                            break;
                        }else{

                            cont++
                            console.log(cont +'-'+j);
                            if(cont==m){
                                cadena+='"'+obj.docum[i].nombre+'":"'+obj.docum[i].valor+'",';
                            }

                            console.log(cadena);
                        }
                    }



               }

                console.log(cadena);
               var nuevoCadena=cadena.substr(cadena,cadena.length-1);
               console.log(nuevoCadena);
               nuevoCadena+='}';
               nuevoCadena=JSON.parse(nuevoCadena);
               console.log(nuevoCadena);
               db.collection(obj.nombre_tabla).insert(nuevoCadena, function(err, resultad) {



               });


           }
        //  res.send('Info ingresada');

        db.close();


               res.send('ingresado');
            console.log(nuevoCadena);
       /* MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            // insertDocument(db, function() {





            db.createCollection(obj.nombre_tabla, {});*/

            //console.log(req.param('items'));

            // db.collection(req.param('table')).insertOne(req.body);
            // db.close();
            //  });
           // });
        });

        db.close();
    });
});

module.exports = router;