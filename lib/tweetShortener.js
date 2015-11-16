'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var wordsSubsutition = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
     "four": '4',
      'be': 'b',
      'you': 'u',
      "at": "@",
     "and": "&"
    };
    var tweetArray = tweet.split(" ")
    for (var i = 0; i < tweetArray.length; i++){
      if (wordsSubsutition[tweetArray[i].toLowerCase()] != undefined) {
        tweetArray[i] = wordsSubsutition[tweetArray[i].toLowerCase()];
      }
    }
    return tweetArray.join(" ")
  },
  bulkShortener: function(tweets){
    var tweetArray = tweets;
    for (var i = 0; i < tweetArray.length; i++) {
      tweetArray[i] = tweetShortener.wordSubstituter(tweetArray[i])
    };
    return tweetArray;
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
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length > 140) {
      shortenedTweet = shortenedTweet.slice(0,137).concat("...");
    }
    return shortenedTweet;
  }
};
