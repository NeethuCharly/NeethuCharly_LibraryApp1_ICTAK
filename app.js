const express = require('express');

const app = express();
const port = process.env.PORT || 3421;
const nav = [
    {
        link:'./signup',name:'Sign Up'
    },
    {
        link:'./signin',name:'Sign In'
    },

    {
        link:'./books',name:'Books'
    },

    {
        link:'./authors',name:'Authors'  
    },
    {
        link:'./addbook',name:'Add Book'  
    },
    {
        link:'/',name:'Sign Out'
    }
];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const indexRouter = require('./src/routes/indexRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/index',indexRouter);
app.use('/addbook',addbookRouter);


app.get('/',function(req,res){
    res.render("welcome",
    {nav,
    title:'Library App'});
    
});


app.listen(port,()=>{console.log("Server Ready at"+port)});
