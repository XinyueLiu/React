const mongoose = require('mongoose');
const { Schema } = mongoose; //equal to const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

//create one model class, if it doesn't exist
mongoose.model('users', userSchema);
