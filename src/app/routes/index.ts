import express from "express";
import { TestRoutes } from "../modules/testModule/test.route";
import { TipsCategoryRoutes } from "../modules/TipsCategory/tipsCategory.route";
import { TipsRoutes } from "../modules/Tips/tips.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/test",
    route: TestRoutes,
  },
  {
    path: "/tips-category",
    route: TipsCategoryRoutes,
  },
  {
    path: "/tips",
    route: TipsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;