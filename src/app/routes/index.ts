import express from "express";
import { TestRoutes } from "../modules/testModule/test.route";
import { TipsCategoryRoutes } from "../modules/TipsCategory/tipsCategory.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;