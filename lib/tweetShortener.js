'use strict';

// "hello" becomes 'hi'
// "to, two, too" become '2'
// "for, four" become '4'
// 'be' becomes 'b'
// 'you' becomes 'u'
// "at" becomes "@"
// "and" becomes "&"	 
var hash ={
	"hello": "hi",
	"to": "2",
	"two": "2",
	"too": "2",
	"for": "4",
	"four": "4",
     "be": "b",
     "you": "u",
     "at": "@",
     "and": "&"
}
var tweetShortener = {
  wordSubstituter: function(string){
  	var words = string.split(" ");
  	for(var i = 0; i < words.length; ++i){
  		var word = words[i].toLowerCase()
  		if (hash.hasOwnProperty(word)){
  			words[i] = hash[word];
  		}
  	}
  	return words.join(" ");
  },
  bulkShortener: function(array){
  	var arr = []
  	for(var i = 0; i < array.length; ++i){
  		arr.push(this.wordSubstituter(array[i]));
  	}
  	return arr;
  },
  selectiveShortener: function(string){
      if (string.length > 141){
      	return this.wordSubstituter(string);
      }else{
      	return string;
      }
  },
  shortenedTruncator: function(string){
  	  if(string.length > 140){
  	 var stillong = this.wordSubstituter(string);
      var justRight = stillong.slice(0, 136) + " ...";
       return justRight;  
    }else{
    	return string;
    }
}
};





