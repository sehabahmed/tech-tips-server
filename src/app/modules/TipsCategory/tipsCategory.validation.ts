import z from "zod";

const createTipsCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({
      error: "Name is required",
    }),
  }),
});

export const TipsCategoryValidation = {
  createTipsCategoryValidationSchema,
};
