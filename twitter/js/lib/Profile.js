/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:53
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Profile');
goog.require('tart');

/*
 * A Profile.
 *@constructor
 */
twitter.Profile = function (bio, photo, location, user) {
    this.id = tart.getUId();
    this.bio = bio;
    this.photoUrl = photo;
    this.location = location;
    this.User = user;
};
