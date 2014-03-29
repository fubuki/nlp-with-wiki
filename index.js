var natural = require('natural'),
    tokenizer = new natural.WordTokenizer();

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
	console.log(docs);
});


tokenizer = new natural.RegexpTokenizer({pattern: /\-/});
console.log(tokenizer.tokenize("flee-dog"));
// [ 'flee', 'dog' ]

console.log(natural.JaroWinklerDistance("dixon","dicksonx"))
console.log(natural.JaroWinklerDistance('not', 'same'));

natural.PorterStemmer.attach();
console.log("i am waking up to the sounds of chainsaws".tokenizeAndStem());
console.log("chainsaws".stem());


classifier = new natural.BayesClassifier();

classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('buy the q s', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();


var NGrams = natural.NGrams;

console.log(NGrams.bigrams('some words here'));
console.log(NGrams.bigrams(['some', 'words', 'here']));

console.log(NGrams.trigrams('some other words here'));
console.log(NGrams.trigrams(['some', 'other', 'words', 'here']));

console.log(NGrams.ngrams('some other words here for you', 4));
console.log(NGrams.ngrams(['some', 'other', 'words', 'here', 'for', 'you'], 4));