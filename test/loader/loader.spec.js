/**
 * Created by thomashourlier on 4/17/15.
 */

var FileLoader = require('../../lib/loader/FileLoader').FileLoader,
    LoggerMock = require('../utils/Logger.mock'),
    ParserMock = require('../parser/Parser.mock');

describe("FileLoader", function() {
    var loader;

    beforeEach(function() {
        loader = new FileLoader(LoggerMock, ParserMock);
    });

    it("should be defined", function() {
        loader.should.have.property('logger');
        loader.should.have.property('parser');
    });

    it('should get a configuration file', function() {

    });
});