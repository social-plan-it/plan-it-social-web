import type { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
};

export function Image({ alt, src, ...props }: ImageProps) {
  return (
    <img
      width="500"
      height="375"
      alt={alt}
      src={`/_vercel/image?url=${encodeURIComponent(src)}&w=750&q=75`}
      {...props}
    />
  );
}
