/**
 * Created by thomashourlier on 4/17/15.
 */

function Parser() {
    this.logger = null;
}
Parser.prototype.parseConfig = function() {
    return {
        myConfiguration: true
    };
};

exports.Parser = Parser;

