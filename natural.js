var natural = require('natural')

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