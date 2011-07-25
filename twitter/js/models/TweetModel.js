/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:55
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.TweetModel');
goog.require('twitter.User');
goog.require('twitter.Tweet');

/*
 *
 *@constructor
 */
TweetModel = function () {};

/**
 *
 * @param {number}userId
 * @return {Array.<tweet>}tweets
 */
twitter.TweetModel.prototype.getTweetsByUserId = function (userId) {
    var tweets = [{}];
    for (var tweet in localStorage) {
	tweet = localStorage.getObject(tweet);
	if (tweet.userId == userId) {
        tweets.push(tweet);
        }
    }
    return tweets;
};

/**
 *
 * @param {number}user , {string}body
 * @return {void}None
 */
twitter.TweetModel.prototype.postTweet = function (user, body) {
    var tweet = new Tweet (user, body);
    localStorage.setObject(tweet.id, tweet);
};

/**
 *
 * @param {number}tweetId
 * @return {void}None
 */
twitter.TweetModel.prototype.removeTweet = function (tweetId) {
    for (var tweet in localStorage) {
	tweet = localStorage.getObject(tweet);
	if (tweet.tweet.id == tweetId) {
        localStorage.removeItem(item);
        }
    }
};

