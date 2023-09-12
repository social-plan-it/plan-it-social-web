import clsx from 'clsx';
import type { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  centerText?: boolean;
  showLabel?: boolean;
};

export function Input({ label, centerText = false, showLabel = true, ...props }: InputProps) {
  return (
    <label className="flex w-full">
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
