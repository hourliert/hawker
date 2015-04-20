/**
 * Created by thomashourlier on 4/16/15.
 */

var sinon = require('sinon'),
    mockery = require('mockery');

describe("Hawker", function() {
    var Hawker, LoaderType,
        Logger,
        Parser,
        Loader,
        FileLoader,
        hawker;

    beforeEach(function() {
        mockery.enable({
            useCleanCache: true,
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        mockery.registerAllowable('Q');

        Loader = require('./loader/Loader.mock');
        Parser = require('./parser/Parser.mock');
        Logger = require('./utils/Logger.mock');
        mockery.registerMock('./utils/Logger', Logger);
        mockery.registerMock('./parser/Parser', Parser);
        mockery.registerMock('./loader/Loader', Loader);
        mockery.registerMock('./loader/FileLoader', Loader);

        Hawker = require('../build/js/Hawker').Hawker;
        LoaderType = require('../build/js/Hawker').LoaderType;

        hawker = new Hawker();
    });

    afterEach(function() {
        mockery.disable();
    });

    it("should be defined", function() {
        hawker.should.be.instanceof(Hawker);
    });

    it("should get the Logger", function() {
        var logger = hawker.getLogger();
        logger.should.be.instanceof(Logger.Logger);
    });

    it("should get the Parser", function() {
        var parser = hawker.getParser();
        parser.should.be.instanceof(Parser.Parser);
    });

    it('should define a file loader', function() {
        hawker.defineLoader(LoaderType.File);
        hawker.loader.should.be.instanceOf(Loader.FileLoader);
    });

    it('should define a url loader', function() {
        /*hawker.defineLoader(LoaderType.Url);

        hawker.loader.should.have.property('logger');
        hawker.loader.should.have.property('parser');*/
    });

    it('should launch hawker with a configuration file', function() {
        hawker.defineLoader(LoaderType.File);
        hawker.launch();
    });

});