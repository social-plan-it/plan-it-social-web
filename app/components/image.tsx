import type { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export function Image({ alt, src, ...props }: ImageProps) {
  return <img alt={alt} src={`/_vercel/image?url=${src}`} {...props} />;
}
