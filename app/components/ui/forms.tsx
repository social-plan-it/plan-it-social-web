import type { InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <label className="flex w-full">
      <span className="sr-only">{label}</span>
      <input {...props} className="border border-gray-300 bg-grayBackground rounded-lg px-4 py-2 w-full text-center" />
    </label>
  );
}
