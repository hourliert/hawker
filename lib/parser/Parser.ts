/**
 * Created by thomashourlier on 4/17/15.
 */

/// <reference path="../_all.ts"/>

import {Logger} from "../utils/Logger";

export class Parser {
    private logger: Logger;
    constructor(logger: Logger) {
        this.logger = logger;
    }

    public parseConfig(data: string): IConfiguration {
        this.logger.debug('Parsing data...');

        var json;

        try {
            json = JSON.parse(data);
        } catch (e) {
            throw new Error("Parser: Invalid json");
        }

        return json;
    }
}

export interface IConfiguration {
    version?: string;
    hostname?: string;
}