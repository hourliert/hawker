/**
 * Created by thomashourlier on 4/17/15.
 */

/// <reference path="../_all.ts"/>

import {Loader} from './Loader';
import {Logger} from "../utils/Logger";
import {Parser, IConfiguration} from "../parser/Parser";

import * as fs from 'fs';
import * as Q from 'q';

export class FileLoader extends Loader {
    constructor(logger: Logger, parser: Parser) {
        super(logger, parser);
    }

    public getConfig(uri: string): Q.IPromise<IConfiguration> {
        this.logger.debug('Reading file');

        var defer = Q.defer<any>();

        fs.readFile(uri, 'utf8', (err, data) => {
            if (err) defer.reject(err);

            this.logger.debug('File read. Begining parsing.');
            defer.resolve(this.parser.parseConfig(data));
        });

        return defer.promise;
    }
}