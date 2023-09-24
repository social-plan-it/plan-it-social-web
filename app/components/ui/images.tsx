import type { ImgHTMLAttributes } from 'react';
import { Image as UnpicImage } from '@unpic/react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
  width: number;
  height: number;
};

export function Image({ ...props }: ImageProps) {
  return <UnpicImage {...props} />;
}
