/**
 * Created by thomashourlier on 4/17/15.
 */

/// <reference path="../_all.ts"/>

export enum VerboseLevel { Warn, Info, Debug }

export class Logger {
    private verboseLevel: VerboseLevel;
    constructor(level: VerboseLevel) {
        this.verboseLevel = level;
    }
    setLevel(level: VerboseLevel) {
        this.verboseLevel = level;
    }
    warn(...args: any[]) {
        this.verboseLevel >= 0 && console.log.apply(console, args);
    }
    info(...args: any[]) {
        this.verboseLevel >= 1 && console.log.apply(console, args);
    }
    debug(...args: any[]) {
        this.verboseLevel >= 2 && console.log.apply(console, args);
    }
}

export default new Logger(VerboseLevel.Warn);
