const express = require('express');
const { findOne } = require('../model/Authordata');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata')

function router(nav){
    // var authors = [
    //     {
            
    //         name:'Paulo Coelho',
    //         born:'24 August 1947',
    //         img:"Paulo Coelho.jpg"
    //     },
    
    //     {
           
    //         name:'Anne Frank', 
    //         born:'12 June 1929'  ,
    //         img:"Anne Frank.jpg"
    //     },
        
    //     {
            
    //         name:'Lucy Maud Montgomery',
    //         born:'November 30, 1874',
    //         img:"Lucy Maud Montgomery.jpg"
    //     },
    
    //     {
           
    //         name:'A P J Abdul Kalam',
    //         born:'15 October 1931',
    //         img:"A P J.jpg"
    //     }
    // ]
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {nav,
            title:'Library App',
            authors});
        });

        });
      
    
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",
            {nav,
            title:'Library App',
            author
            });

        })
       
    });
    
    
return authorsRouter;
}
module.exports = router;
