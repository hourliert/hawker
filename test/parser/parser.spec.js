/**
 * Created by thomashourlier on 4/17/15.
 */

var Parser = require('../../build/js/parser/parser').Parser,
    LoggerMock = require('../utils/Logger.mock');

describe("Parser", function() {
    var parser;

    beforeEach(function() {
        parser = new Parser(LoggerMock);
    });

    it("should be defined", function() {
        parser.should.have.property('logger');
    });

    it('should parse configuration file', function() {

    });
});