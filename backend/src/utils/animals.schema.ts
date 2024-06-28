import Joi from 'joi';

export const animalsSchema = Joi.object({
  user: Joi.object(),
  id: Joi.number(),
  name: Joi.string().min(2).required(),
  specie: Joi.string().min(3).required(),
  gender: Joi.string().required(),
  yearOfBirth: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
  description: Joi.string().required(),
  imageUrl: Joi.string(),
  videoUrl: Joi.string(),
  availableForAdoption: Joi.boolean().required().default(false),
  isAdopted: Joi.boolean().required().default(false)
});

