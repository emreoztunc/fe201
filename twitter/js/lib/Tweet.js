/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:53
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Tweet');
goog.require('tart');

/*
 * A tweet from the user with the userId carrying the data in "body"
 *@constructor
 */
twitter.Tweet = function (user, body) {
    this.tweetId = tart.getUId();
    this.userId = user.id;
    this.body = body;
    this.time = tart.randomTime();

};