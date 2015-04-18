/**
 * Created by thomashourlier on 4/17/15.
 */

/// <reference path="../_all.ts"/>

import {Logger} from "../utils/Logger";
import {Parser, IConfiguration} from "../parser/Parser";

export class Loader {
    protected logger: Logger;
    protected parser: Parser;

    constructor(logger: Logger, parser: Parser) {
        this.logger = logger;
        this.parser = parser;
    }

    public getConfig(uri: string): Q.IPromise<IConfiguration> {
        throw 'Could not call getConfig here.';
    }
}