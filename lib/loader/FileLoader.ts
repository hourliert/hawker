/**
 * Created by thomashourlier on 4/17/15.
 */

/// <reference path="../_all.ts"/>

import {Loader} from './Loader';
import Logger from '../utils/Logger';
import * as fs from 'fs';
import * as Q from 'q';

export class FileLoader extends Loader {
    constructor() {
        super();
    }

    public getConfig(uri: string): Q.IPromise<any> {
        var defer = Q.defer<any>();

        fs.readFile(uri, 'utf8', function (err, data) {
            if (err) defer.reject(err);

            let obj = JSON.parse(data);
            defer.resolve(obj);
        });

        return defer.promise;
    }
}