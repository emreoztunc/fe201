/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:55
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.FollowManager');
goog.provide('twitter.Follow');
goog.provide('twitter.UserModel');
goog.require('tart');
FollowManager = function () {};

twitter.FollowManager.prototype.createFollow = function (follower, following) {
    var follow = new Follow (follower.id, following.id);
    localStorage.setObject(follow.id, follow);
};

/**
 * Returns users that a specific user follow by its user
 * @param {number} userId A user id. This method uses this to find a user, and than fetches
 * @return {Array.<User>} Follows of the given user.
 */
twitter.FollowManager.prototype.getFollowingByUserId = function (userId) {
    following = [{}];
    for (var follow in localStorage) {
        if(follow && follow.followerId == userId) {
            following.push(UserModel.getUserById(follow.followingId));
        }
    }
    return following;
};

/**
 * 
 * @param userId
 * @return {(boolean|number)}
 */
twitter.FollowManager.prototype.getFollowersByUserId = function (userId) {
    followers = [{}];
    for (var follow in localStorage) {
        if(follow.followingId == userId) {
            followers.push(UserModel.getUserById(follow.followerId));
        }
    }
    return followers;
};