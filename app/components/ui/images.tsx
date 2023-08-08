import type { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
};

export function Image({ alt, ...props }: ImageProps) {
  return <img alt={alt} {...props} />;
}
