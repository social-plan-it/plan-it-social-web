import { db } from '~/modules/database/db.server';
import { faker } from '@faker-js/faker';
import { type User, type Password } from '@prisma/client';

type UserAndPWProps = User & {
  password: Password;
};

function createRandomUserAndPW(): UserAndPWProps {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = faker.internet.userName({ firstName, lastName });
  const email = faker.internet.email({ firstName, lastName });
  const userId = faker.string.uuid();
  return {
    id: userId,
    email: email,
    name: name,
    password: {
      id: faker.string.uuid(),
      userId: userId,
      hash: faker.string.uuid(),
    },
    currentChallenge: null,
  };
}

const users = faker.helpers.multiple(createRandomUserAndPW, { count: 10 });

const events = [
  {
    name: 'Tech Talks: Exploring the Latest Web Development Trends',
    date: new Date('2023-07-19T08:00:00'),
    description:
      'Join us for an evening of insightful talks on progressive web apps, serverless architecture, and the future of JavaScript frameworks.',
    imgUrl: 'imgs/upc-events1.png',
    imgAlt: 'group of people in a meeting-1',
    location: '123 Main St, San Francisco',
  },
  {
    name: 'Fitness Bootcamp: Get Fit and Stay Active',
    date: new Date('2023-08-15T18:30:00'),
    description:
      'Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all fitness levels.',
    imgUrl: 'imgs/upc-events2.png',
    imgAlt: 'group of people in a meeting-2',
    location: '456 Elm St, Munich',
  },
  {
    name: 'Tennis Tournament: Fun and Competitive Matches',
    date: new Date('2023-09-22T12:15:00'),
    description:
      'Participate in our annual tennis tournament and showcase your skills in exciting matches with players from the community.',
    imgUrl: 'imgs/upc-events3.png',
    imgAlt: 'group of people in a meeting-3',
    location: '789 Oak St, Istanbul',
  },
];

const groups = [
  {
    name: 'WebDev Enthusiasts',
    description:
      'Join our community of web development enthusiasts and stay up-to-date with the latest trends, technologies, and innovations in the ever-evolving world of web development.',
  },
  {
    name: 'FitFam Community',
    description:
      "Welcome to the FitFam Community! We're dedicated to helping you achieve your fitness goals and live a healthier, more active lifestyle. Join us for high-energy bootcamp sessions that are suitable for all fitness levels.",
  },
  {
    name: 'Competitive Tennis Club',
    description:
      'Calling all tennis enthusiasts! Our Competitive Tennis Club is your gateway to exciting and friendly matches with players who share your passion for the game. Join us for fun and challenging competitive tennis tournaments.',
  },
];

async function seed() {
  try {
    for (const user of users) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          password: {
            create: {
              id: user.password.id,
              hash: user.password.hash,
            },
          },
        },
      });
    }

    await db.group.createMany({ data: groups });

    const groupRecords = await db.group.findMany();

    const eventRecords = events.map((event, index) => ({
      ...event,
      groupId: groupRecords[index].id,
    }));

    await db.event.createMany({ data: eventRecords });

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await db.$disconnect();
  }
}

seed();
