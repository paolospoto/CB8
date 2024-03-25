const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: "String", required: true, default: "no-title-provided" },
  author: { type: "String", required: true, default: "no-author-provided" },
  year: { type: "Date", required: false, default: Date.now },
});

module.exports = mongoose.model("Book", bookSchema);
