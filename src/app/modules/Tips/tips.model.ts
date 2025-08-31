import mongoose, { model, Schema } from "mongoose";
import { TTips } from "./tips.interface";

const tipsSchema = new Schema<TTips>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  author: {
    type: mongoose.Schema.ObjectId,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  upvotedBy: [
    {
      type: mongoose.Schema.ObjectId,
    },
  ],
  comments: {
    type: mongoose.Schema.ObjectId,
  },
  isPremium: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Tips = model<TTips>("Tips", tipsSchema);
