import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';

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

export function Button({ ...props }: ButtonProps) {
  return (
    <button {...props} className="border-2 w-24 bg-red-700 text-white rounded-lg" type="submit">
      Create
    </button>
  );
}
