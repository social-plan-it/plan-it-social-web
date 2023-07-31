import type { V2_MetaFunction } from '@remix-run/react';
import HeroSection from '~/components/hero-section';
import { EventsSection } from '../components/events-section';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Plan It Social' }];
};

export const events = [
  {
    id: 0,
    imgUrl: 'imgs/upc-events1.png',
    imgAlt: 'group of people in a meeting',
    groupName: 'Group Name 1',
    eventTitle: 'Tech Talks: Exploring the Latest Web Development Trends',
    eventDescription:
      'Join us for an evening of insightful talks on progressive web apps, serverless architecture, and the future of JavaScript frameworks.',
    date: '2023-05-18',
    time: '5:00 PM',
    location: '123 Main St, City',
    category: 'Technology',
  },
  {
    id: 1,
    imgUrl: 'imgs/upc-events2.png',
    imgAlt: 'group of people in a meeting',
    groupName: 'Group Name 2',
    eventTitle: 'Fitness Bootcamp: Get Fit and Stay Active',
    eventDescription:
      'Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all fitness levels.',
    date: '2023-05-22',
    time: '6:00 PM',
    location: '456 Elm St, City',
    category: 'Fitness',
  },
  {
    id: 2,
    imgUrl: 'imgs/upc-events3.png',
    imgAlt: 'group of people in a meeting',
    groupName: 'Group Name 3',
    eventTitle: 'Tennis Tournament: Fun and Competitive Matches',
    eventDescription:
      'Participate in our annual tennis tournament and showcase your skills in exciting matches with players from the community.',
    date: '2023-05-25',
    time: '9:00 AM',
    location: '789 Oak St, City',
    category: 'Sports',
  },
];

export default function Index() {
  return (
    <>
      <HeroSection />
      <EventsSection events={events} />
    </>
  );
}
