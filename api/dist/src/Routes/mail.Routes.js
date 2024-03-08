"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const cors_middleware_1 = require("../middleware/cors.middleware");
const emailService_controller_1 = require("../Controller/emailService.controller");
const router = express.Router();
router.post('/send-email', cors_middleware_1.corsMiddleware, emailService_controller_1.sendMail);
exports.default = router;
