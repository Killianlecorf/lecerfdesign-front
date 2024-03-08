const express = require('express');
import { corsMiddleware } from '../middleware/cors.middleware';
import { 
    sendMail
 } from "../Controller/emailService.controller";

 const router = express.Router();

router.post('/send-email',corsMiddleware, sendMail);

export default router;