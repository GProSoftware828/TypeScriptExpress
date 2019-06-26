"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"auth/login\">Login</a>\n      </div>\n  ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
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
