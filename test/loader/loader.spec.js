/**
 * Created by thomashourlier on 4/17/15.
 */

var sinon = require('sinon'),
    mockery = require('mockery');

describe("FileLoader", function() {
    var FileLoader,
        Logger,
        Parser,
        loader;

    beforeEach(function() {
        mockery.enable({
            useCleanCache: true,
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        mockery.registerAllowable('q');

        Logger = require('../utils/Logger.mock');
        Parser = require('../parser/Parser.mock');

        mockery.registerMock('fs', {
            readFile: function(uri, charset, cb) {
                if (uri === 'error') {
                    cb('error');
                } else {
                    cb(null, 'json data file');
                }
            }
        });

        FileLoader = require('../../build/js/loader/FileLoader').FileLoader;
        loader = new FileLoader(new Logger.Logger(), new Parser.Parser());
    });

    afterEach(function() {
        mockery.disable();
    });

    it("should be defined", function() {
        loader.should.be.instanceof(FileLoader);
    });

    it('should get a correct configuration file', function(done) {
        var promise = loader.getConfig('myfile.json');

        promise.then(function (config) {
            config.should.containDeep({
                myConfiguration: true
            });
            done();
        }, function(err) {
            err.should.equal('error');
            done();
        }).catch(function (err){
            done(err);
        });
    });

    it('should get a incorrect configuration file', function(done) {
        var promise = loader.getConfig('error');

        promise.then(function () {
            done();
        }, function(err) {
            err.should.equal('error');
            done();
        }).catch(function (err){
            done(err);
        });
    });
});