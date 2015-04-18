/**
 * Created by thomashourlier on 4/16/15.
 */

var hawker = require('../lib/hawker'),
    assert = require('assert');

describe("hawker", function () {
    it("should be defined", function () {
        var main = new hawker.Hawker();
        assert.deepEqual([ 1, 2, 3, 5, 6, 7, 8 ], main.uniqArray);
    });
});