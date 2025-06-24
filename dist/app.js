"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // IMPORTANTE que esté primero
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const typeorm_1 = require("typeorm");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
(0, typeorm_1.createConnection)()
    .then(() => {
    console.log("Database connected");
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)("dev"));
    // Rutas
    app.use("/api", userRoutes_1.default);
    app.use((req, res) => {
        res.status(404).json({ message: "Not found" });
    });
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => console.error("TypeORM connection error: ", error));
