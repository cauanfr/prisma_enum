import { Express } from "express";
import { morganLogger } from "./morgan.logger";

export const initLoggers = (app: Express) => {
  if (process.env.APP_ENV !== "TEST") {
    app.use(morganLogger);
  }
};
