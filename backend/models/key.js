const mongoose = require('mongoose');

const keySchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: false },
  imagePath: { type: String, required: false },
  creator: {type: mongoose.Schema.Types.ObjectId, ref: "User",required: true}
});

module.exports = mongoose.model('Key', keySchema);
