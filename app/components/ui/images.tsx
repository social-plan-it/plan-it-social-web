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
