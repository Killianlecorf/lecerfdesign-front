import express from 'express';
import {corsMiddleware} from './src/middleware/cors.middleware';
// import cors from "cors";
import EmailRoute from './src/Routes/mail.Routes';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(corsMiddleware)


app.use('/api/service', EmailRoute)

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port : ${port}`);
});

