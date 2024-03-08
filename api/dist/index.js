"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_middleware_1 = require("./src/middleware/cors.middleware");
const mail_Routes_1 = __importDefault(require("./src/Routes/mail.Routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(cors_middleware_1.corsMiddleware);
app.use(body_parser_1.default.json());
app.use('/api/service', mail_Routes_1.default);
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port : ${port}`);
});
