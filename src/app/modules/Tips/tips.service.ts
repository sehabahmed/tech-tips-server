import { QueryBuilder } from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { TipsCategory } from "../TipsCategory/tipsCategory.model";
import { TipsSearchableFields } from "./tips.constant";
import { TTips } from "./tips.interface";
import { Tips } from "./tips.model";
import httpStatus from "http-status";

const createTipsIntoDB = async (payload: TTips) => {

    const categoryExists = await TipsCategory.findById(payload.category);

    if(!categoryExists) {
        throw new AppError(httpStatus.NOT_FOUND, `Invalid category: Category with ID ${payload.category} does not exist`)
    }

  const result = await Tips.create(payload);

  return result;
};

const getAllTipsFromDB = async (query: Record<string, unknown>) => {
  const tipsQuery = new QueryBuilder(Tips.find().populate("category"), query)
    .filter()
    .search(TipsSearchableFields)
    .sort()
    .paginate()
    .fields();

  const result = await tipsQuery.modelQuery;

  return result;
};

export const TipsServices = {
  createTipsIntoDB,
  getAllTipsFromDB,
};
