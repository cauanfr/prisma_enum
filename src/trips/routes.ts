// NÃO TEREI ROTA DE PAYMENT DIRETAMENTE

import { Router } from "express";
import {
  createTripController,
  listTripsController,
  updateTripController,
} from "./controllers";
import { isBodyValid, tripExists } from "./middlewares";
import { tripPayloadSchema, tripUpdatePayloadSchema } from "./schemas";

export const tripRouter = Router();

tripRouter.post("/", isBodyValid(tripPayloadSchema), createTripController);
tripRouter.get("/", listTripsController);

tripRouter.put(
  "/:tripId",
  tripExists,
  isBodyValid(tripUpdatePayloadSchema),
  updateTripController
);
