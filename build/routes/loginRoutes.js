"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function post(routeName) {
    return function (target, key, desc) {
        router.post(routeName, target[key]);
    };
}
//Meta data:
//npm install reflect-meta...
//import {reflect-meta} from ...
// const plane = {
//   color: 'red'
// };
//const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
//This means use an identifier of note, attach 'hi there'
//to the plane object's color property
