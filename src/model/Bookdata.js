const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

    Title : String,
    Author : String,
    Genre : String,
    Image : String

});
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
