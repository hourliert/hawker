/**
 * Created by thomashourlier on 4/16/15.
 */

/// <reference path="_all.ts"/>

import Core from "./core";
import Logger from "./utils/logger";

export class Hawker {
    constructor() {

    }

    public launchFromUrl(url: string) {
        Logger.debug('Launching from url: ' + url);
    }

    public launchFromFile(path: string) {
        Logger.debug('Launching from file: ' + path);
    }
}

export default new Hawker();




