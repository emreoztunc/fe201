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
UserModel = function () {};

twitter.UserModel.prototype.createUser = function (userName, password, eMail){
    var user = new User (userName, password, eMail);
    localStorage.setObject(user.id, user);
    var phot = "fff";
    var locat = "kkk";
    var bio = "bio";

    ProfileModel.createProfile(phot, locat, bio, user.userId);
    //user.tweets = TweetModel.getTweetsByUserId(user.id);

};

twitter.UserModel.prototype.removeUser = function (userId) {
    for (var user in localStorage) {
	user = localStorage.getObject(user);
	if (user.userId == userId) {
        localStorage.removeItem(user)
        }
    }
};

twitter.UserModel.prototype.login = function (userName, password) {
    for (var user in localStorage) {
        if ((user.userName == userName) &&(user.password == password)) {
            var session = new Session(user.id);
            localStorage.setObject("Session", session);
        }
    }
};

twitter.UserModel.prototype.logout = function () {
    localStorage.removeItem("Session");
};

twitter.UserModel.prototype.getUserById = function (userId) {
    for (var user in localStorage) {
	user = localStorage.getObject(user);
	if (user.id == userId) {
        return item;
        }
    }
};

twitter.UserModel.prototype.getUserByUsername = function (userName) {
    for (var user in localStorage) {
	user = localStorage.getObject(user);
	if (user.userName == userName) {
        return user;
        }
    }
};
