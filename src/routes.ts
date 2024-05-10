import { Express } from "express";
import { tripRouter } from "./trips/routes";

export const initRoutes = (app: Express) => {
  app.use("/api/trips", tripRouter);
};
