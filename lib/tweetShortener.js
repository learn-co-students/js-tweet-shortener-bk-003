'use strict';

var tweetShortener = {
  list: {"hello": 'hi',
  	"to": '2',
  	"two": '2',
  	"too": '2',
	"for":'4',
	"four": '4',
	"be" : 'b',
	"you" : 'u',
	"at" : "@",
	"and" : "&"
	},
  wordSubstituter: function(tweet){
  	var newTweet = tweet.split(' ')
  	newTweet.forEach(function(word, index){
  		for (var i in this.list) {
  			if (word.toLowerCase() == i) {
  				newTweet[index] = this.list[i]
  			}
  		}
  	}, this)

  	return newTweet.join(' ')
  },
  bulkShortener: function(tweets){
  	tweets.forEach(function(tweet, index){
  		tweets[index] = this.wordSubstituter(tweet)
  	}, this)
  	return tweets
  },
  selectiveShortener: function(tweet){
  	if (tweet.length > 140) {
  		tweet = this.wordSubstituter(tweet)
  	}
  	return tweet
  },
  shortenedTruncator: function(tweet){
  	var tweeet = this.selectiveShortener(tweet)
  	if (tweeet.length>140) {
	  	tweeet = tweeet.substring(0,137) + '...'
	}
  	return tweeet
  }
};
