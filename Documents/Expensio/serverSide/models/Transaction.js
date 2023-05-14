const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: [true, "Please add some text"]
  },
  category: {
    type: String,
    required: [true, "Please add some category"]
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"]
  },
  date: {
    type: Date,
    default: new Date()
  },
  userId: {
    type: String,
    required: [true, "UserId not found"]
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);
