const express = require('express');
const addbookRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    addbookRouter.get('/',function(req,res){
      
        res.render("addbook",
        {nav,
        title:'Library App',
       
        });
    });

    addbookRouter.post('/add',function(req,res){
        var item = {
            Title : req.body.Title,
            Author : req.body.Author,
            Genre : req.body.Genre,
            Image : req.body.Image
                    };
   var book =  Bookdata(item);
   book.save();
   res.redirect('/books');
    });
    
return addbookRouter;
}
module.exports = router;