import { handleErrors } from "./handle.errors";
import { Express } from "express";
import { z } from "zod";
import { customErrorMap } from "./customZod.errors";

export const initErrorHandlers = (app: Express) => {
  app.use(handleErrors);

  // ZOD CUSTOM ERRORS
  // z.setErrorMap(customErrorMap);
};
