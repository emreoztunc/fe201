/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:53
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.User');
goog.require('tart');

/*
 * A User.
 *@constructor
 */
twitter.User = function (userName, password, eMail){
    this.id = tart.getUId();
    this.userName = userName;
    this.password = password;
    this.eMail = eMail;
};

//this.following = FollowManager.
//this.profile = ProfileModel.
//this.tweets = tweet[{}];

