/**
 * Created by xaipo on 10/20/2015.
 */
var express=require('express');
var router = express.Router();

router.route('/login')

    .post(function(req,res){
        res,send({message:'login'})
    })
module.exports=router;