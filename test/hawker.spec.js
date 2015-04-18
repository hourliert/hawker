/**
 * Created by thomashourlier on 4/16/15.
 */

var Hawker = require('../lib/hawker').Hawker;

describe("Hawker", function() {
    var hawker;

    beforeEach(function() {
        hawker = new Hawker();
    });

    it("should get the Logger", function() {
        var logger = hawker.getLogger();
        logger.should.have.property('verboseLevel');
    });

    it("should get the Parser", function() {
        var parser = hawker.getParser();
        parser.should.have.property('logger');
    });

    it('should launch hawker from a file', function() {
        hawker.launchFromFile('mock');

        hawker.loader.should.have.property('logger');
        hawker.loader.should.have.property('parser');
    });

    it('should launch hawker from an url', function() {
        hawker.launchFromUrl('mock');

        /*hawker.loader.should.have.property('logger');
        hawker.loader.should.have.property('parser');*/
    });
});