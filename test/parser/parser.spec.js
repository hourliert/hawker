/**
 * Created by thomashourlier on 4/17/15.
 */

var sinon = require('sinon'),
    mockery = require('mockery');

describe("Parser", function() {
    var Parser,
        Logger,
        parser;

    beforeEach(function() {
        mockery.enable({
            useCleanCache: true,
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        Logger = require('../utils/Logger.mock');
        mockery.registerMock('../utils/Logger', Logger);
        Parser = require('../../build/js/parser/Parser').Parser;

        parser = new Parser(new Logger.Logger());
    });

    afterEach(function() {
        mockery.disable();
    });

    it("should be defined", function() {
        parser.should.have.property('logger');
    });

    it('should parse configuration file', function() {
        //test here when configuration will be defined

    });
});