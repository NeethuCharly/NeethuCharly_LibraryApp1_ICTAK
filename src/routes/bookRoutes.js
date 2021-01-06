const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'The Alchemist',
            author:'Paulo Coelho',
            genre:'Novel',
            img:"The Alchemist.jpg"
        },
    
        {
            title:'The Diary Of An Young Girl',
            author:'Anne Frank', 
            genre:'Autobiography'   ,
            img:"The Diary Of An Young Girl.jpg"
        },
        
        {
            title:'Anne of Green Gables',
            author:'Lucy Maud Montgomery',
            genre:'Fiction',
            img:"Anne of Green Gables.jpg"
        },
    
        {
            title:'Wings Of Fire',
            author:'A P J Abdul Kalam',
            genre:'Autobiography',
            img:"Wings Of Fire.jpg"
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {nav,
        title:'Library App',
        books});
    });
    
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("book",
        {nav,
        title:'Library App',
        book:books[id]
        });
    });
    
return booksRouter;
}
module.exports = router;
