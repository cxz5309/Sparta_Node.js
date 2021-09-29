import dotenv from 'dotenv';
import app from './server.js';
import mongoConnect from './mongoose.js';

dotenv.config();

const port = process.env.PORT;

mongoConnect()
  .finally(
    app.listen(port, () => console.log(`express started with port ${port}`)),
  );
