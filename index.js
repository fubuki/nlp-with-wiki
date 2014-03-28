var natural = require('natural'),

    tokenizer =new natural.WordTokenizer();
console.log(tokenizer.tokenize("your dog has flees."));


var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/scrapy');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
  
var html = new Schema({
    title     : String
  , body      : String

});

var Model = mongoose.model('yahoo', html);

Model.find({}, function (err, docs) {
  
});
