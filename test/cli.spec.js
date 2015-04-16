/**
 * Created by thomashourlier on 4/16/15.
 */

var cli    = require('./../lib/cli'),
    assert = require('assert');

describe("cli", function () {
    it("should be defined", function () {
        assert.deepEqual([ 1, 2, 3, 5, 6, 7, 8 ], cli.default)
    });
});