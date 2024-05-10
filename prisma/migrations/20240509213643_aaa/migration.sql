-- CreateEnum
CREATE TYPE "TripStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'UPCOMING');

-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "whatever" TEXT NOT NULL,
    "status" "TripStatus" NOT NULL DEFAULT 'IN_PROGRESS',

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);
