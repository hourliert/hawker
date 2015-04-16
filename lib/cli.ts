/// <reference path="_all.ts"/>

import Core from "./core/core";
import _ = require('lodash');

Core();

var res = _.uniq([1,2,2,3,5,6,6,7,8,8,8,8]);
console.log(res);

export default res;




