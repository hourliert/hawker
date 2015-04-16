/**
 * Created by thomashourlier on 4/16/15.
 */

/// <reference path="_all.ts"/>

import Core from "./core";
import * as _ from "lodash";

export class Hawker {
    public uniqArray: Array<number>;

    constructor() {
        Core();

        this.uniqArray = _.uniq([1,2,2,3,5,6,6,7,8,8,8,8]);
        console.log(this.uniqArray);
    }
}




