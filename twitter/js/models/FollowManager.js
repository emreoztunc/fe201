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

/*
 *
 *@constructor
 */
FollowManager = function () {};

/**
 * Creates a Follow for a user to follow another one
 * @param {number}follower A user id, {number}following A user id. This method uses these numbers to create a follow
 * @return {void}None. Only creation of "follow" is being done. Nothing more.
 */
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
 * Returns followers of a user.
 * @param {number}userId A user id. This method uses this to find a user and than fetches
 * @return {(boolean | Array.<User>)} followers of the given users.
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