import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Route from './routes/index';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api', Route);
app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to Project tracker!' }));

export default app;
