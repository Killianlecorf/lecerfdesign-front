import express from 'express';
import bodyParser from 'body-parser';
import { corsMiddleware } from './src/middleware/cors.middleware';
import EmailRoute from './src/Routes/mail.Routes';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000;

console.log(process.env.PORT);


app.use(corsMiddleware);

app.use(bodyParser.json());

app.use('/api/service', EmailRoute)

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

export {app}