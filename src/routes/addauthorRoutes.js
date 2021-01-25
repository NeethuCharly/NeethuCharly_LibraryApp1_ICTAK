const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    addauthorRouter.get('/',function(req,res){
      
        res.render("addauthor",
        {nav,
        title:'Library App',
       
        });
    });

    addauthorRouter.post('/add',function(req,res){
        var item = {
            Name : req.body.Name,
            Born  : req.body.Born,
            Image : req.body.Image
                    };
   var author =  Authordata(item);
   author.save();
   res.redirect('/authors');
    });
    
return addauthorRouter;
}
module.exports = router;