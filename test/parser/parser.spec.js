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
        mockery.registerSubstitute('../utils/Logger', '../utils/Logger.mock');

        Parser = require('../../build/js/parser/Parser').Parser;
        parser = new Parser(new Logger.Logger());
    });

    afterEach(function() {
        mockery.disable();
    });

    it("should be defined", function() {
        parser.should.be.instanceof(Parser);
    });

    it('should parse a correct configuration file', function() {
        parser.parseConfig('{"version": "0.0.0"}').should.containDeep({
            version: '0.0.0'
        }).and.should.not.throw();
    });

    it('should parse a incorrect configuration file', function() {
        (function() {
            parser.parseConfig('{ incorrect: 11');
        }).should.throw('Parser: Invalid json');
    });
});