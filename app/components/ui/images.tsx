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
