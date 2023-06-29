import joi from "joi";
import { varify } from "./schemas";

// This validate function makes a schema
export const validate = async (payload) => {
  //call joi
  const r = joi.object(varify);

  // To catch errors. Joi now trys to validate
  try {
    const results = await r.validateAsync(payload, { abortEarly: false });
    return null; // returns null if it passes validation
  } catch (errors) {
    const errorsMod = {};
    errors.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });
    return errorsMod; // returns errors if it succeeds in validation
  }
};
