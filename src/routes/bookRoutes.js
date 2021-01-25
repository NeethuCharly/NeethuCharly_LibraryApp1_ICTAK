const express = require('express');
const { findOne } = require('../model/Bookdata');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata')
function router(nav){
    // var books = [
    //     {
    //         title:'The Alchemist',
    //         author:'Paulo Coelho',
    //         genre:'Novel',
    //         img:"The Alchemist.jpg"
    //     },
    
    //     {
    //         title:'The Diary Of An Young Girl',
    //         author:'Anne Frank', 
    //         genre:'Autobiography'   ,
    //         img:"The Diary Of An Young Girl.jpg"
    //     },
        
    //     {
    //         title:'Anne of Green Gables',
    //         author:'Lucy Maud Montgomery',
    //         genre:'Fiction',
    //         img:"Anne of Green Gables.jpg"
    //     },
    
    //     {
    //         title:'Wings Of Fire',
    //         author:'A P J Abdul Kalam',
    //         genre:'Autobiography',
    //         img:"Wings Of Fire.jpg"
    //     }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {nav,
            title:'Library App',
            books});
        });

        });
       
    
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",
            {nav,
            title:'Library App',
            book
            });

        })
       
    });
    
return booksRouter;
}
module.exports = router;
