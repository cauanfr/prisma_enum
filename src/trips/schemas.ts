import { TripStatus } from "@prisma/client";
import { z } from "zod";
import { $CustomEnum } from "../@types/custom-enum";

export const tripSchema = z.object({
  id: z.number().positive(),
  status: z.nativeEnum(TripStatus),
  whatever: z.string().min(1),
});

export const tripPayloadSchema = tripSchema.omit({
  id: true,
  status: true,
});

export const tripUpdatePayloadSchema = tripSchema.omit({ id: true }).extend({
  status: z.nativeEnum($CustomEnum.TripStatusUpdate),
});

// Outra forma de resolver

// type TripStatusUpdate = {
//   IN_PROGRESS: "IN_PROGRESS";
//   COMPLETED: "COMPLETED";
// };

// const TripStatusUpdate: TripStatusUpdate = {
//   IN_PROGRESS: "IN_PROGRESS",
//   COMPLETED: "COMPLETED",
// };

// export const tripUpdatePayloadSchema = tripSchema.omit({ id: true }).extend({
//   status: z.nativeEnum(TripStatusUpdate),
// });
