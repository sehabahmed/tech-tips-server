import catchAsync from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";
import { TipsCategoryServices } from "./tipsCategory.service";
import httpStatus from "http-status";

const createTipsCategory = catchAsync(async (req, res) => {
  const tipsCategory = await TipsCategoryServices.createTipsCategory(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tips Category Created Successfully",
    data: tipsCategory,
  });
});

const getAllTipsCategories = catchAsync(async (req, res) => {
  const tipsCategory = await TipsCategoryServices.getAllTipsCategories(
    req.query
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tips Category Retrieved Successfully",
    data: tipsCategory,
  });
});

export const TipsCategoryControllers = {
  createTipsCategory,
  getAllTipsCategories,
};
