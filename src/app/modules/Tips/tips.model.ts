import mongoose, { model, Schema } from "mongoose";
import { TTips } from "./tips.interface";
import { TipsCategory } from "../TipsCategory/tipsCategory.model";

const tipsSchema = new Schema<TTips>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "TipsCategory",
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

// Middleware to increment tips count in associated category
tipsSchema.post("save", async function(doc) {
    try{
        await TipsCategory.findByIdAndUpdate(doc.category, {
            $inc: { tipsCount: 1 }
        })
    }catch (error) {
        throw new Error(`Failed to increment tips count for category ${doc.category}: ${error}`)
    }
})

export const Tips = model<TTips>("Tips", tipsSchema);
