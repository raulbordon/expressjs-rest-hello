"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const typeorm_1 = require("typeorm"); // getRepository"  traer una tabla de la base de datos asociada al objeto
const Users_1 = require("./entities/Users");
const utils_1 = require("./utils");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // important validations to avoid ambiguos errors, the client needs to understand what went wrong
    if (!req.body.first_name)
        throw new utils_1.Exception("Please provide a first_name");
    if (!req.body.last_name)
        throw new utils_1.Exception("Please provide a last_name");
    if (!req.body.email)
        throw new utils_1.Exception("Please provide an email");
    if (!req.body.password)
        throw new utils_1.Exception("Please provide a password");
    const userRepo = (0, typeorm_1.getRepository)(Users_1.Users);
    // fetch for any user with this email
    const user = yield userRepo.findOne({ where: { email: req.body.email } });
    if (user)
        throw new utils_1.Exception("Users already exists with this email");
    const newUser = (0, typeorm_1.getRepository)(Users_1.Users).create(req.body); //Creo un usuario
    const results = yield (0, typeorm_1.getRepository)(Users_1.Users).save(newUser); //Grabo el nuevo usuario 
    return res.json(results);
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getRepository)(Users_1.Users).find();
    return res.json(users);
});
exports.getUsers = getUsers;
