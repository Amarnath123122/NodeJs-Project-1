const mongooose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err =>{
  console.log('Uncaught Exception');
  console.log(err.name, err.message);
  process.exit(1)
})
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongooose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB CONNECTED');
  });
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err =>{
  console.log('Unhandled Rejection');
  console.log(err.name, err.message);
  server.close(() => {
    console.log("server closed");
    process.exit(1);
  });
})