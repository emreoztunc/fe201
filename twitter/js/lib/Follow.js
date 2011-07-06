/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 14:24
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Follow');
goog.require('tart');
twitter.Follow = function (followerId, followingId){
    this.id = tart.getUId();
    this.followerId = followerId;
    this.followingId = followingId;
};