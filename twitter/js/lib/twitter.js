/**
 * Created by JetBrains PhpStorm.
 * User: Emre
 * Date: 23.07.2011
 * Time: 22:09
 * To change this template use File | Settings | File Templates.
 */

goog.require('twitter.setup');
goog.require('twitter.index');
goog.require('tart.storage.Storage');
goog.provide('twitter');

twitter.localStorage = new tart.storage.Storage();