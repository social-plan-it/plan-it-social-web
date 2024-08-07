import { useState, type ImgHTMLAttributes } from 'react';
import type { ImageProps as UnpicImageProps } from '@unpic/react';
import { Image as UnpicImage } from '@unpic/react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  UnpicImageProps & {
    alt: string;
    src: string;
    width: number;
    height: number;
  };

export function Image({ ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && <div className="absolute opacity-5 animate-pulse bg-slate-100 w-full h-full" />}
      <div className="w-full h-full">
        <UnpicImage
          {...props}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </div>
    </div>
  );
}

interface ImageDetails {
  url: string;
  altText: string;
  title?: string;
}

const staticImage: { [key: string]: ImageDetails } = {
  avatarAstronaut: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716394728/SocialPlanIt/avatar-astronaut_100x100',
    altText: 'Astronaut',
    title: 'Astronaut',
  },
  companyLogoHorizontal: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391878/SocialPlanIt/SocialPlan-it-logo-Horizontal_760x121',
    altText: 'Social Planet logo horizontal',
    title: 'Horizontal Company Logo',
  },
  companyLogoStacked: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391876/SocialPlanIt/SocialPlan-it-logo-stacked',
    altText: 'Social Planet logo stacked',
    title: 'Stacked Company Logo',
  },
  kidWithBinoculars: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391874/SocialPlanIt/Kid_looking_through_binoculars-512x512',
    altText: 'Kid looking through binoculars',
    title: 'Kid with Binoculatrs',
  },
  defaultEventPhoto: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391884/SocialPlanIt/default-event-photo-302x215',
    altText: 'Animated characters in a remote meeting',
    title: 'Animated remote meeting',
  },
  defaultGroupPhoto: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/default-group-photo-512x512',
    altText: 'Two friends taking a selfie',
    title: 'Two Friends in a Selfie',
  },
  discord: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391871/SocialPlanIt/purple_discord_logo-100x100',
    altText: 'Discord logo in purple circle',
    title: 'Discord',
  },
  diverseGroupOfThree: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391871/SocialPlanIt/Diverse_group_of_three-512x512',
    altText: 'Diverse group of three characters',
    title: 'Diverse Group of Three',
  },
  gpsLocation: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/GPS_Location_100x100',
    altText: 'GPS location emoji',
    title: 'GPS',
  },
  happySun: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391871/SocialPlanIt/Happy_sun_with_four_planets-512x512',
    altText: 'Happy sun surrounded by four planets',
    title: 'Happy Sun',
  },
  loadingPhoto: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391883/SocialPlanIt/SocialPlanit-Loading-220x220',
    altText: 'Circular silhouette of a spaceship headed to Saturn',
    title: 'Loading Photo',
  },
  favicon: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391880/SocialPlanIt/SocialPlan-it-logo-Favicon',
    altText: 'Red Saturn',
    title: 'Company Favicon',
  },
  saturnSilhouette: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716359837/SocialPlanIt/Planet_Silhouette_White',
    altText: 'Silhouette of a Saturn shape',
    title: 'Saturn Silhouette',
  },
  share: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/Arrow_Share-100x100',
    altText: 'Triangular arrow pointing North West',
    title: 'Share Arrow',
  },
  targetWithArrow: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391875/SocialPlanIt/Target_with_arrow-512x512',
    altText: 'Red and white target with arrow in the center',
    title: 'Target with Arrow',
  },
  twitter: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/blue_twitter_logo-100x100',
    altText: 'Twitter logo in blue circle',
    title: 'Twitter',
  },
  largeGroup: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716412303/SocialPlanIt/Large-Group-Hero-Image_553x379',
    altText: 'Large group of friends',
    title: 'Large Group',
  },
  womenCollaborating: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716412303/SocialPlanIt/Women-collaborating_500x500',
    altText: 'Four women collaborating on a laptop',
    title: 'Women Collaborating',
  },
  friendsOnABench: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716412303/SocialPlanIt/Group-of-friends-on-a-bench_500x500',
    altText: '5 friends on a bench',
    title: 'Friends on a bench',
  },
  womenOnStaircase: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716412303/SocialPlanIt/Women-on-a-staircase_500x500',
    altText: 'Women on a staircase',
    title: 'Women on a Staircase',
  },
};
export { staticImage };
