import { prisma } from "../../prisma/database";
import { Trip, TripPayload, TripUpdate } from "./interfaces";

export const createTripService = async (
  payload: TripPayload
): Promise<Trip> => {
  return await prisma.trip.create({ data: payload });
};

export const updateTripService = async (
  payload: TripUpdate,
  tripId: string
): Promise<Trip> => {
  return await prisma.trip.update({
    data: { ...payload },
    where: { id: Number(tripId) },
  });
};

export const listTripsService = async (): Promise<Trip[]> => {
  return await prisma.trip.findMany();
};
