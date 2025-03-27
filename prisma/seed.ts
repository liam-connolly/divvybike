import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.tripData.createMany({
    data: [
      {
        ride_id: 'A246CA24873F7C5C',
        rideable_type: 'classic_bike',
        started_at: new Date('2025-02-25 21:21:21.171'),
        ended_at: new Date('2025-02-25 21:30:09.941'),
        start_station_name: 'Michigan Ave & Lake St',
        start_station_id: 'TA1305000011',
        end_station_name: 'Clark St & Elm St',
        end_station_id: 'TA1307000039',
        start_lat: 41.886022,
        start_lng: -87.624398,
        end_lat: 41.902973,
        end_lng: -87.63128,
        member_casual: 'member',
      },
      {
        ride_id: 'A0F65F3531F1FB2B',
        rideable_type: 'electric_bike',
        started_at: new Date('2025-02-24 00:32:56.553'),
        ended_at: new Date('2025-02-24 00:38:21.711'),
        start_station_name: 'Michigan Ave & Lake St',
        start_station_id: 'TA1305000011',
        end_station_name: 'Wabash Ave & 9th St',
        end_station_id: 'TA1309000010',
        start_lat: 41.886022,
        start_lng: -87.624398,
        end_lat: 41.870769,
        end_lng: -87.625734,
        member_casual: 'casual',
      },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
