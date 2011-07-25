/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:55
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.UserModel');
goog.require('twitter.User');
goog.require('twitter.ProfileModel');
goog.require('twitter.Session');
goog.require('tart');

/*
 *
 *@constructor
 */
UserModel = function () {};

/**
 *
 * @param {string}userName , {string}password , {string}eMail
 * @return {void}None
 */
twitter.UserModel.prototype.createUser = function (userName, password, eMail){
    var user = new User (userName, password, eMail);
    localStorage.setObject(user.id, user);
    var phot = "fff";
    var locat = "kkk";
    var bio = "bio";

    ProfileModel.createProfile(phot, locat, bio, user.userId);
    //user.tweets = TweetModel.getTweetsByUserId(user.id);

};

/**
 *
 * @param {number}userId
 * @return {void}None
 */
twitter.UserModel.prototype.removeUser = function (userId) {
    for (var user in localStorage) {
	user = localStorage.getObject(user);
	if (user.userId == userId) {
        localStorage.removeItem(user)
        }
    }
};

/**
 *
 * @param {string}userName , {string}password
 * @return {void}None
 */
twitter.UserModel.prototype.login = function (userName, password) {
    for (var user in localStorage) {
        if ((user.userName == userName) &&(user.password == password)) {
            var session = new Session(user.id);
            localStorage.setObject("Session", session);
        }
    }
};

/**
 *
 * @return {void}None
 */
twitter.UserModel.prototype.logout = function () {
    localStorage.removeItem("Session");
};

/**
 *
 * @param {number}userId
 * @return {User}user
 */
twitter.UserModel.prototype.getUserById = function (userId) {
    var user;
    for (var item in localStorage) {
	user = localStorage.getObject(item);
	if (item.id == userId) {
        user = item;
        }
    }
    return user;
};

/**
 *
 * @param {string}userName
 * @return {User | boolean}user
 */
twitter.UserModel.prototype.getUserByUsername = function (userName) {
    var user;
    for (var item in localStorage) {
	user = localStorage.getObject(item);
	if (item.userName == userName) {
        user = item;
        }
    }
    return user;
};
