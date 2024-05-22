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
  saturnSilhouette: {
    url: 'https://res.cloudinary.com/dxctpvd8v/image/upload/v1716359837/SocialPlanIt/Planet_Silhouette_White.webp',
    altText: 'Silhouette of a saturn shape',
    title: 'Saturn Silhouette',
  },
};
export { staticImage };
