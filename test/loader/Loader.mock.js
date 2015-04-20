/**
 * Created by thomashourlier on 4/18/15.
 */

var Q = require('q');

function Loader() {
    this.logger = null;
    this.parser = null;
}
Loader.prototype.getConfig = function() {

};

function FileLoader() {

}
FileLoader.prototype = new Loader();
FileLoader.prototype.getConfig = function() {
    var defer = Q.defer();
    defer.resolve();
    return defer.promise;
};

function UrlLoader() {

}
UrlLoader.prototype = new Loader();
UrlLoader.prototype.getConfig = function() {
    var defer = Q.defer();
    defer.resolve();
    return defer.promise;
};


exports.Loader = Loader;
exports.FileLoader = FileLoader;
exports.UrlLoader = UrlLoader;