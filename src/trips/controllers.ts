import { Request, Response } from "express";
import {
  createTripService,
  listTripsService,
  updateTripService,
} from "./services";

export const createTripController = async (
  { body }: Request,
  res: Response
): Promise<Response> => {
  return res.status(201).json(await createTripService(body));
};

export const updateTripController = async (
  { body, params }: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(await updateTripService(body, params.tripId));
};

export const listTripsController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(await listTripsService());
};
