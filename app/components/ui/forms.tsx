import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { Link } from '@remix-run/react';

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

type AttachmentProps = {
  label: ReactNode;
  attachmentUrl: string;
  disabled?: boolean;
};

export function Attachment({ label, attachmentUrl, disabled = false }: AttachmentProps) {
  return (
    <div className="w-full lg:max-w-md flex gap-2 items-center justify-center mt-1 text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent">
      {disabled ? (
        <span className="font-bold">{label}</span>
      ) : (
        <a
          href={attachmentUrl}
          className="font-bold underline decoration-4 underline-offset-2 decoration-primary dark:decoration-darkPrimary hover:decoration-primaryAccent hover:dark:decoration-darkPrimaryAccent"
        >
          {label}
        </a>
      )}
      <input type="hidden" name="attachmentUrl" value={attachmentUrl} />
      <button aria-label="Remove attachment" type="submit" name="intent" value="remove-attachment" disabled={disabled}>
        X
      </button>
    </div>
  );
}
