const express = require('express');
const addbookRouter = express.Router();
function router(nav){
    addbookRouter.get('/',function(req,res){
      
        res.render("addbook",
        {nav,
        title:'Library App',
       
        });
    });

    addbookRouter.get('/add',function(req,res){
        
        res.send("ADDED THE BOOK SUCCESSFULLY")
    });
    
return addbookRouter;
}
module.exports = router;