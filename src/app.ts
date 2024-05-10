import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { checkEnvVariables } from "./configs/checkEnvVariables";
import { initLoggers } from "./configs/loggers";
import { initErrorHandlers } from "./errors";
import { initRoutes } from "./routes";

export const createApp = () => {
  const app = express();

  initLoggers(app);
  app.use(express.json());

  checkEnvVariables();

  initRoutes(app);
  initErrorHandlers(app);

  return app;
};

export const app = createApp();
