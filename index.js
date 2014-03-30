var natural = require('natural'),
    tokenizer = new natural.WordTokenizer();

var mongoose = require('mongoose');
var NGrams = natural.NGrams;
mongoose.connect('mongodb://127.0.0.1/scrapy');

var Schema = mongoose.Schema;
  
var html = new Schema({
    title     : { type: String }
});

mongoose.model('yahoo', html);
var yahoo = mongoose.model('yahoo')


yahoo.findOne(function (err, docs) {
	//console.log(docs.title);
	processData(docs.title);
});


function processData(doc)
{
	console.log(NGrams.ngrams(doc, 4));	
}