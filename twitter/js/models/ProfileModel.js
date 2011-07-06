/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:54
 * To change this template use File | Settings | File Templates.
 */
goog.provide('twitter.ProfileModel');
goog.require('tart');
ProfileModel = function () {};

twitter.ProfileModel.prototype.createProfile = function (phot, locat, bio, userId) {
    profile = new Profile(phot, locat, bio, userId);
    localStorage.setObject(profile.id, profile);
};

twitter.ProfileModel.prototype.getProfileByUserId = function (userId) {
    for(var profile in localStorage) {
        if(profile.user.id == userId) {
            return profile;
        }
    }

};

twitter.ProfileModel.prototype.editProfileByUserId = function (userId, newProfile) {
    for(var profile in localStorage) {
        if(profile.user.id == userId) {
            profile = newProfile;
        }
    }
};
