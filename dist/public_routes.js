"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Public Routes are those API url's that anyone can request
 * whout having to be logged in, for example:
 *
 * POST /user is the endpoint to create a new user or "sign up".
 * POST /token can be the endpoint to "log in" (generate a token)
 */
const express_1 = require("express");
const utils_1 = require("./utils");
const actions_1 = require("./actions");
const router = (0, express_1.Router)();
// signup route, creates a new user in the DB
router.post('/user', (0, utils_1.safe)(actions_1.createUser));
exports.default = router;
