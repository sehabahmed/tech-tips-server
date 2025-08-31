import { model, Schema } from "mongoose";
import {
  TipsCategoryDocument,
  TipsCategoryModel,
} from "./tipsCategory.interface";

// Define the schema
const TipsCategorySchema = new Schema<TipsCategoryDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    tipsCount: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TipsCategory = model<TipsCategoryDocument, TipsCategoryModel>(
  "TipsCategory",
  TipsCategorySchema
);
