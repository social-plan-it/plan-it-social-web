import type { V2_MetaFunction } from '@remix-run/react';
import type { Event, Group } from '@prisma/client';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import BenefitsSection from '~/components/marketing/benefits-section';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Plan It Social' }];
};

export const events: Event[] = [
  {
    id: '0',
    name: 'Tech Talks: Exploring the Latest Web Development Trends',
    date: new Date('2023-07-19T08:00:00'),
    description:
      'Join us for an evening of insightful talks on progressive web apps, serverless architecture, and the future of JavaScript frameworks.',
    imgUrl: 'imgs/upc-events1.png',
    imgAlt: 'group of people in a meeting-1',
    location: '123 Main St, San Francisco',
    groupId: '345',
  },
  {
    id: '1',
    name: 'Fitness Bootcamp: Get Fit and Stay Active',
    date: new Date('2023-08-15T18:30:00'),
    description:
      'Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all fitness levels.',
    imgUrl: 'imgs/upc-events2.png',
    imgAlt: 'group of people in a meeting-2',
    location: '456 Elm St, Munich',
    groupId: '346',
  },
  {
    id: '2',
    name: 'Tennis Tournament: Fun and Competitive Matches',
    date: new Date('2023-09-22T12:15:00'),
    description:
      'Participate in our annual tennis tournament and showcase your skills in exciting matches with players from the community.',
    imgUrl: 'imgs/upc-events3.png',
    imgAlt: 'group of people in a meeting-3',
    location: '789 Oak St, Istanbul',
    groupId: '347',
  },
];

export const groups: Group[] = [
  {
    id: '345',
    name: 'WebDev Enthusiasts',
    description:
      'Join our community of web development enthusiasts and stay up-to-date with the latest trends, technologies, and innovations in the ever-evolving world of web development.',
  },
  {
    id: '346',
    name: 'FitFam Community',
    description:
      "Welcome to the FitFam Community! We're dedicated to helping you achieve your fitness goals and live a healthier, more active lifestyle. Join us for high-energy bootcamp sessions that are suitable for all fitness levels.",
  },
  {
    id: '347',
    name: 'Competitive Tennis Club',
    description:
      'Calling all tennis enthusiasts! Our Competitive Tennis Club is your gateway to exciting and friendly matches with players who share your passion for the game. Join us for fun and challenging competitive tennis tournaments.',
  },
];

export default function Index() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <EventsSection events={events} groups={groups} />
    </>
  );
}
