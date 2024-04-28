import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { Link } from '@remix-run/react';

import clsx from 'clsx';

export const MAX_FILE_SIZE_MB = 8;
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

type ImageUploadProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  centerText?: boolean;
  showLabel?: boolean;
  maxFileSizeMB?: number;
  fileAccept?: string;
};
export function ImageUpload({
  label,
  fileAccept = 'image/*',
  centerText = false,
  showLabel = true,
  maxFileSizeMB = MAX_FILE_SIZE_MB,
  ...props
}: ImageUploadProps) {
  function checkFileSize(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    // default 8MB
    if (file.size > (maxFileSizeMB ?? 8) * 1024 * 1024) {
      alert('File size is too large');
      event.target.value = '';
      throw new Error('File size is too large');
    }
  }

  return (
    <label className="flex flex-col w-full">
      <span className={clsx({ 'bold pb-1': showLabel, 'sr-only': !showLabel })}>{label}</span>
      <input {...props} type="file" accept={fileAccept} onChange={checkFileSize} />
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  centerText?: boolean;
  showLabel?: boolean;
};

export function Input({ label, centerText = false, showLabel = true, ...props }: InputProps) {
  return (
    <label className="flex flex-col w-full">
      <span className={clsx({ 'bold pb-1': showLabel, 'sr-only': !showLabel })}>{label}</span>
      <input
        {...props}
        className={clsx('border border-gray-300 bg-grayBackground rounded-lg px-4 py-2 w-full', {
          'center-text': centerText,
        })}
      />
    </label>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: ReactNode;
};

export function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <label className="flex flex-col w-full">
      {label}
      <textarea {...props} className="border border-gray-300 bg-grayBackground rounded-lg px-4 py-2 w-full" />
    </label>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="border-2 bg-red-700 text-white rounded-lg" type="submit">
      {children}
    </button>
  );
}

type LinkButtonProps = {
  children: ReactNode;
  to: string;
};

export function LinkButton({ to, children, ...props }: LinkButtonProps) {
  return (
    <Link {...props} to={to} className="border-2 bg-red-700 text-white rounded-lg p-3 w-full text-center" type="submit">
      {children}
    </Link>
  );
}
