import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { prisma } from "../../prisma/database";
import { ApiError } from "../errors/api.errors";

export const isBodyValid =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);
    return next();
  };

export const tripExists = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  const tripId = Number(req.params.tripId);
  const foundTrip = await prisma.trip.findUnique({ where: { id: tripId } });

  if (!foundTrip) throw new ApiError("Trip not found.", 404);

  return next();
};
