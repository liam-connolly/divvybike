-- CreateTable
CREATE TABLE "TripData" (
    "id" SERIAL NOT NULL,
    "ride_id" TEXT NOT NULL,
    "rideable_type" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL,
    "ended_at" TIMESTAMP(3) NOT NULL,
    "start_station_name" TEXT,
    "start_station_id" TEXT,
    "end_station_name" TEXT,
    "end_station_id" TEXT,
    "start_lat" DOUBLE PRECISION NOT NULL,
    "start_lng" DOUBLE PRECISION NOT NULL,
    "end_lat" DOUBLE PRECISION,
    "end_lng" DOUBLE PRECISION,
    "member_casual" TEXT NOT NULL,

    CONSTRAINT "TripData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TripData_ride_id_key" ON "TripData"("ride_id");
