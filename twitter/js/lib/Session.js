/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 05.07.2011
 * Time: 09:58
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Session');
goog.require('tart');
twitter.Session = function (userId) {
    this.id = tart.getUId();
    this.userId = userId;
}