const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true, validate:{
    validator:function(v){
      return "/^(?=.[A-Za-z](?=.*\d)[A-Za-z\d]{8,}$/.test(v)";
    }, message : "Please enter the valid password"
  }, },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
