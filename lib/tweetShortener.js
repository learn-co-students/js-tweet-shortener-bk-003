'use strict';

var substitutes = {
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
    };

var tweetShortener = {
  wordSubstituter: function(tweet){
  	var tweetArray = tweet.split(' ');
  	for(var i=0;i < tweetArray.length;i++){
  		if(substitutes[tweetArray[i].toLowerCase()] != undefined){
  			 tweetArray[i] = substitutes[tweetArray[i].toLowerCase()];
  		}
  	}
  	tweetArray = tweetArray.join(" ")
  	return tweetArray
  },

  bulkShortener: function(tweetArray){
  	for(var i=0;i < tweetArray.length;i++){
  		tweetArray[i] = tweetShortener.wordSubstituter(tweetArray[i])
  	}
  	return tweetArray
  },


  selectiveShortener: function(tweet){
  	if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },


  shortenedTruncator: function(tweet){
  	var shortened = tweetShortener.selectiveShortener(tweet);
    if (shortened.length > 140) {
      shortened = shortened.substr(0,137).concat("...");
    }
    return shortened;
  }
};
