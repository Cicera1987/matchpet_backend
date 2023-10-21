import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Aplicativo rodando na porta: ' + PORT);
});
