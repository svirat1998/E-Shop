 import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Processing",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt:{
    type: Date,
  }
});

export default mongoose.model("Withdraw", withdrawSchema);
