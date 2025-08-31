import { Document, Model } from "mongoose";

// Interface for the TipsCategory document
export interface TipsCategoryDocument extends Document {
  name: string;
  tipsCount: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Type for the input data when creating/updating a category
export type TTipsCategory = {
  name: string;
  tipsCount?: string;
  isDeleted?: boolean;
};

// Interface for the TipsCategory model (if no static methods)
export type TipsCategoryModel = Model<TipsCategoryDocument>;
