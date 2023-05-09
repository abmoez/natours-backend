const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log(err);
  process.exit(1);
});

const app = require('./app');

dotenv.config({ path: `${__dirname}/config.env` });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB CONNECTED'));

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Listenning on port ${port} ...`);
});

process.on('unhandeledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
