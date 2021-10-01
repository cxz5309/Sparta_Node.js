import express from 'express';
import morgan from 'morgan';
import path from 'path';
import homeRouter from './routers/home.js';

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(express.static(path.join(path.resolve(), 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRouter);

export default app;
