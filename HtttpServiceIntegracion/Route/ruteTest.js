/**
 * Created by xaipo on 8/25/2016.
 */
var express= require('express');
var router= express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/productos',function(req,res){


    MongoClient.connect('mongodb://localhost:27017/IntegrationTest', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('coleccion1').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);

        });
        db.close();
    });


 });


module.exports=router;