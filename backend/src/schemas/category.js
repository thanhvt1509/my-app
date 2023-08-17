import joi from "joi";

export const categorySchema = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  description_long: joi.string().required()
});
