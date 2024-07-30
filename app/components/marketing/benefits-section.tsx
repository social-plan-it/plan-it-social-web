import { Link } from '@remix-run/react';
import { staticImage, Image } from '../ui/images';

const benefits = [
  {
    title: 'Join a group',
    message: 'Do what you love, meet others who love it, find your community. The rest is history!',
    imgUrl: staticImage.womenCollaborating.url,
    imgAlt: staticImage.womenCollaborating.altText,
    imgTitle: staticImage.womenCollaborating.title,
    link: '/groups',
  },
  {
    title: 'Find an event',
    message:
      'Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.',
    imgUrl: staticImage.friendsOnABench.url,
    imgAlt: staticImage.friendsOnABench.altText,
    imgTitle: staticImage.friendsOnABench.title,
    link: '/events',
  },
  {
    title: 'Start a group',
    message: 'You don’t have to be an expert to gather people together and explore shared interests.',
    imgUrl: staticImage.womenOnStaircase.url,
    imgAlt: staticImage.womenOnStaircase.altText,
    imgTitle: staticImage.womenOnStaircase.title,
    link: '/groups/new',
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-gray-800 pt-5 pb-5 text-white font-sans flex justify-center content-center">
      <div className="max-w-screen-xl flex flex-wrap content-between justify-center gap-y-8 gap-x-16 grid-cols-3">
        {benefits.map((benefit, index) => (
          <Link key={index} to={benefit.link}>
            <div className="flex flex-col p-5 text-start max-w-xs">
              <div className="w-full pb-5">
                <Image
                  className="w-full"
                  src={benefit.imgUrl}
                  alt={benefit.imgAlt}
                  title={benefit.imgTitle}
                  width={500}
                  height={500}
                />
              </div>
              <h1 className="text-4xl font-bold mb-2">{benefit.title}</h1>
              <p className="text-lg">{benefit.message}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
