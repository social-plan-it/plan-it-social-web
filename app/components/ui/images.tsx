import type { ImgHTMLAttributes } from 'react';
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
  return <UnpicImage {...props} />;
}

interface ImageDetails {
  url: string;
  altText: string;
  title: string;
}

const staticImage: { [key: string]: ImageDetails } = {
  avatarAstronaut: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716394728/SocialPlanIt/avatar-astronaut_100x100.webp',
    altText: 'Astronaut',
    title: 'Astronaut',
  },
  companyLogoHorizontal: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391878/SocialPlanIt/SocialPlan-it-logo-Horizontal_760x121.webp',
    altText: 'Social Planet logo horizontal',
    title: 'Horizontal Company Logo',
  },
  companyLogoStacked: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391876/SocialPlanIt/SocialPlan-it-logo-stacked.webp',
    altText: 'Social Planet logo stacked',
    title: 'Stacked Company Logo',
  },
  kidWithBinoculars: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391874/SocialPlanIt/Kid_looking_through_binoculars-512x512.webp',
    altText: 'Kid looking through binoculars',
    title: 'Kid with Binoculatrs',
  },
  defaultEventPhoto: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391884/SocialPlanIt/default-event-photo-302x215.webp',
    altText: 'Animated characters in a remote meeting',
    title: 'Animated remote meeting',
  },
  defaultGroupPhoto: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/default-group-photo-512x512.webp',
    altText: 'Two friends taking a selfie',
    title: 'Two Friends in a Selfie',
  },
  discord: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391871/SocialPlanIt/purple_discord_logo-100x100.webp',
    altText: 'Discord logo in purple circle',
    title: 'Discord',
  },
  diverseGroupOfThree: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391871/SocialPlanIt/Diverse_group_of_three-512x512.webp',
    altText: 'Diverse group of three characters',
    title: 'Diverse Group of Three',
  },
  gpsLocation: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/GPS_Location_100x100.webp',
    altText: 'GPS location emoji',
    title: 'GPS',
  },
  happySun: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391871/SocialPlanIt/Happy_sun_with_four_planets-512x512.webp',
    altText: 'Happy sun surrounded by four planets',
    title: 'Happy Sun',
  },
  loadingPhoto: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391883/SocialPlanIt/SocialPlanit-Loading-220x220.webp',
    altText: 'Circular silhouette of a spaceship headed to Saturn',
    title: 'Loading Photo',
  },
  favicon: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391880/SocialPlanIt/SocialPlan-it-logo-Favicon.webp',
    altText: 'Red Saturn',
    title: 'Company Favicon',
  },
  saturnSilhouette: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716359837/SocialPlanIt/Planet_Silhouette_White.webp',
    altText: 'Silhouette of a Saturn shape',
    title: 'Saturn Silhouette',
  },
  share: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/Arrow_Share-100x100.webp',
    altText: 'Triangular arrow pointing North West',
    title: 'Share Arrow',
  },
  targetWithArrow: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391875/SocialPlanIt/Target_with_arrow-512x512.webp',
    altText: 'Red and white target with arrow in the center',
    title: 'Target with Arrow',
  },
  twitter: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716391867/SocialPlanIt/blue_twitter_logo-100x100.webp',
    altText: 'Twitter logo in blue circle',
    title: 'Twitter',
  },
};
export { staticImage };
