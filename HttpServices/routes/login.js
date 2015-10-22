/**
 * Created by xaipo on 10/20/2015.
 */
var express=require('express');
var router = express.Router();







router.route('/login')

    .post(function(req,res){
        var aux = req.body.name;
        console.log();
        console.log('req is: '+req);
        //object
        console.log('req.body is: ' +req.body);
        //undefined
        console.log('req.body.name is: '+req.body.name);
        res.send({message:'login'+ aux });
    });


module.exports=router;

