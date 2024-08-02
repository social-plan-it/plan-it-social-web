import { useState, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

export const MAX_FILE_SIZE_MB = 8;
export const ACCEPTED_IMAGE_TYPES = 'image/jpeg, image/jpg, image/png, image/webp';

type ImageUploadProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  centerText?: boolean;
  showLabel?: boolean;
  maxFileSizeMB?: number;
  fileAccept?: string;
};
export function ImageUpload({
  label,
  fileAccept = ACCEPTED_IMAGE_TYPES,
  centerText = false,
  showLabel = true,
  maxFileSizeMB = MAX_FILE_SIZE_MB,
  ...props
}: ImageUploadProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  function checkFileSize(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    // default 8MB
    if (file.size > maxFileSizeMB * 1024 * 1024) {
      setErrorMessage('File size is too large');
      event.target.value = '';
      return;
    }

    setErrorMessage('');
  }

  return (
    <label className="flex flex-col w-full">
      <span className={clsx({ 'bold pb-1': showLabel, 'sr-only': !showLabel })}>{label}</span>
      <input {...props} type="file" accept={fileAccept} onChange={checkFileSize} />
      <p className="text-sm text-red-500">{errorMessage}</p>
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
