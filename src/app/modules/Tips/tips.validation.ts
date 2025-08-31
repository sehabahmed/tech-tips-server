import { z } from "zod";

const objectId = z.string().regex(/^[a-f\d]{24}$/i, "Invalid ObjectId");

export const createTipsValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    category: objectId,
    tags: z.array(z.string()).optional(),
    author: objectId.optional(),
    isPremium: z.boolean(),
  }),
});

export const TipsValidation = {
  createTipsValidationSchema,
};
