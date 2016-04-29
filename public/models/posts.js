var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Posts = new Schema({

  title:
    {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  comments_counter: {
    type: Number,
    minimum: 0,
    required: true
  },
  comments: {
    type: String,
    default: none
  },
  section: {
    type: String,
    enum: ["Day", "Age", "Health", "Wealth", "Nature", "Culture", "Future"]
  }
});

module.exports = mongoose.model("Posts", Posts);
