import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { TipsValidation } from "./tips.validation";
import { TipsControllers } from "./tips.controller";

const router = express.Router();

router.get("/", TipsControllers.getAllItems);

router.post(
  "/",
  validateRequest(TipsValidation.createTipsValidationSchema),
  TipsControllers.createTips
);

export const TipsRoutes = router;
