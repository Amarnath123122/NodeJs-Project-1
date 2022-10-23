/* eslint-disable prettier/prettier */
const mongooose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
//const LOCALDB = process.env.DATABASE_LOCAL;
mongooose.Schema({
  name:{
    type:String,
    required: [true, "the tour name is required"]
  },
  name:{
    type:String,
    required: [true, "the tour name is required"]
  },

});
mongooose
  // eslint-disable-next-line no-undef
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB CONNECTED');
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
