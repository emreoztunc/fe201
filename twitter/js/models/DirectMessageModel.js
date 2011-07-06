/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:54
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.DirectMessageModel');
goog.require('twitter.DirectMessage');
goog.require('tart');
DirectMessageModel = function () {};

twitter.DirectMessageModel.prototype.sendDirectMessage = function (from, to, body) {
    directMessage = new DirectMessage(from.id, to.id, body);
    localStorage.setObject(directMessage.id, directMessage);
};

twitter.DirectMessageModel.prototype.getInboxByUserId = function (userId) {
    var inbox = [{}];
    for (var directMessage in localStorage) {
        if (directMessage.toId == userId) {
            inbox.push(directMessage);
        }
    }
    return inbox;
};

twitter.DirectMessageModel.prototype.getSentByUserId = function (userId) {
    var sent = [{}];
    for (var directMessage in localStorage) {
        if (directMessage.senderId == userId) {
            sent.push(directMessage);
        }
    }
    return sent;
};

