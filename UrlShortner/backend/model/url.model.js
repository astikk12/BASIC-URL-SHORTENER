import mongoose from "mongoose";

const shortSchema = mongoose.Schema(
  {
    redirect: {
      type: String,
      required: true,
    },
    shortid: {
      type: String,
      required: true,
    },
    visited: [
      {
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    visitCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("URL", shortSchema);
