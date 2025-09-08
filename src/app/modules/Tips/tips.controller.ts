import catchAsync from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";
import { TipsServices } from "./tips.service";
import httpStatus from "http-status";

const createTips = catchAsync(async (req, res) => {
  const tips = await TipsServices.createTipsIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tips created successfully",
    data: tips,
  });
});

const getAllItems = catchAsync(async (req, res) => {
    const tips = await TipsServices.getAllTipsFromDB(req.query);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All Tips retrieved successfully",
        data: tips,
    })
})

const getSingleTips = catchAsync(async (req, res) => {
    const { id } = req.params;
    const tips = await TipsServices.getSingleTipsFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Single Tips retrieved successfully",
        data: tips,
    })
})

export const TipsControllers = {
    createTips,
    getAllItems,
    getSingleTips,
}
