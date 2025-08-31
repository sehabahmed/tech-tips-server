import { QueryBuilder } from "../builder/QueryBuilder";
import { tipsCategorySearchableFields } from "./tipsCategory.constant";
import { TTipsCategory } from "./tipsCategory.interface";
import { TipsCategory } from "./tipsCategory.model";

const createTipsCategory = async (tipsCategory: TTipsCategory) => {
  const result = await TipsCategory.create(tipsCategory);
  return result;
};

const getAllTipsCategories = async (query: Record<string, unknown>) => {
  const tips = new QueryBuilder(TipsCategory.find({ isDeleted: false }), query)
    .search(tipsCategorySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await tips.modelQuery;
  return result;
};

export const TipsCategoryServices = {
  createTipsCategory,
  getAllTipsCategories,
};
