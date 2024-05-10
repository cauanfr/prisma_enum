import { z } from "zod";
import {
  tripPayloadSchema,
  tripSchema,
  tripUpdatePayloadSchema,
} from "./schemas";

export type Trip = z.infer<typeof tripSchema>;
export type TripPayload = z.infer<typeof tripPayloadSchema>;
export type TripUpdate = z.infer<typeof tripUpdatePayloadSchema>;
