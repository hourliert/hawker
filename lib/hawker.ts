/**
 * Created by thomashourlier on 4/16/15.
 */

/// <reference path="_all.ts"/>

import {Logger, VerboseLevel} from "./utils/Logger";
import {Loader} from "./loader/Loader";
import {FileLoader} from "./loader/FileLoader";
import {Parser, IConfiguration} from "./parser/Parser";

export class Hawker {
    private loader: Loader;
    private logger: Logger;
    private parser: Parser;

    constructor(level: VerboseLevel) {
        this.logger = new Logger(level);
        this.parser = new Parser(this.logger);
    }

    public getLogger(): Logger {
        return this.logger;
    }
    public getParser(): Parser {
        return this.parser;
    }

    public launchFromUrl(url: string) {
        this.logger.debug('Launching from url: ' + url);
    }
    public launchFromFile(path: string) {
        this.logger.debug('Instantiate FileLoader to load: ' + path);

        this.loader = new FileLoader(this.logger, this.parser);
        this.getConfig(path);
    }

    public getConfig(uri: string) {
        this.logger.debug('Getting configuration');

        this.loader.getConfig(uri).then((obj: IConfiguration) => {
            this.logger.info('Configuration: ', obj);
        });
    }
}




