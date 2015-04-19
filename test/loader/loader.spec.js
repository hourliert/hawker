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

        mockery.registerAllowable('Q');
        Logger = require('../utils/Logger.mock');
        Parser = require('../parser/Parser.mock');
        mockery.registerMock('../utils/Logger', Logger);
        mockery.registerMock('../parser/Parser', Parser);
        FileLoader = require('../../build/js/loader/FileLoader').FileLoader;

        loader = new FileLoader(new Logger.Logger(), new Parser.Parser());
    });

    it("should be defined", function() {
        loader.should.have.property('logger');
        loader.should.have.property('parser');
    });

    it('should get a configuration file', function() {

    });
});