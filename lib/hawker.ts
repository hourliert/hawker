/**
 * Created by thomashourlier on 4/16/15.
 */

/// <reference path="_all.ts"/>

import Logger from "./utils/Logger";
import {Loader} from "./loader/Loader";
import {FileLoader} from "./loader/FileLoader";

export class Hawker {
    private loader: Loader;


    public launchFromUrl(url: string) {
        Logger.debug('Launching from url: ' + url);
    }

    public launchFromFile(path: string) {
        Logger.debug('Instantiate FileLoader to load: ' + path);

        this.loader = new FileLoader();
        this.getConfig(path);
    }

    public getConfig(uri: string) {
        Logger.debug('Getting configuration');

        this.loader.getConfig(uri).then((obj) => {
            Logger.warn(obj);
        });
    }
}

export default new Hawker();




