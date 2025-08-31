import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/asyncCatch";
import { ZodType } from "zod";

type ValidationSchema = {
  body?: any;
  query?: any;
  params?: any;
};

export const validateRequest = <T extends ValidationSchema>(
  schema: ZodType<T>
) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const parseBody = await schema.parseAsync({
      body: req.body,
    });

    req.body = parseBody.body;

    next();
  });
};
