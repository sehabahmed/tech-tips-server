import { QueryBuilder } from "../../builder/QueryBuilder";
import { TipsSearchableFields } from "./tips.constant";
import { TTips } from "./tips.interface";
import { Tips } from "./tips.model";

const createTipsIntoDB = async (payload: TTips) => {
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
