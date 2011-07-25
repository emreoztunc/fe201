/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:50
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.DirectMessage');
goog.require('tart');

/*
 * A direct Message
 *@constructor
 */
twitter.DirectMessage = function (fromId, toId, body){
    this.id = tart.getUId();
    this.fromId = fromId;
    this.toId = toId;
    this.body = body;
};