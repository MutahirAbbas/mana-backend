const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: [String],
  },
  name:{
    type:String
  },
  company:{
    type:String
  },
  destination:{
    type:String
  },
  number:{
    type:Number
  },
  date: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Posts", PostSchema);
