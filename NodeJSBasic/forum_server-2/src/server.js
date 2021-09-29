import express from 'express';
import morgan from 'morgan';
import path from 'path';
import homeRouter from './routers/home.js';

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use('/css', express.static(path.join(path.resolve(), 'public/css')));
app.use('/js', express.static(path.join(path.resolve(), 'public/js')));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), '/src/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRouter);

export default app;
