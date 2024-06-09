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
    <div>
      <div className={`w-full h-full rounded-3xl ${loaded ? '' : 'bg-slate-200 animate-pulse'}`}>
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
