import type { ImgHTMLAttributes } from 'react';
import { Image as UnpicImage } from '@unpic/react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
  layout?: string;
  background?: string;
  width?: number;
  height?: number;
  piority?: boolean;
};

export function Image({ ...props }: ImageProps) {
  return <UnpicImage {...props} />;
}
