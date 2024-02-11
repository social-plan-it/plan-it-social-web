import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'warm' | 'outlined';
  buttonStyle: 'rounded' | 'fullyRounded';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

export function Button({ variant, buttonStyle, size, children, ...props }: ButtonProps) {
  const baseClasses = 'w-full sm:w-fit me-2 mb-2 text-center font-medium focus:outline-none focus:ring-4';
  let variantClasses = '';
  let styleClasses = '';
  let sizeClasses = '';

  if (variant === 'primary') {
    variantClasses = 'bg-primary text-white focus:ring-gray-300 hover:bg-gray-900';
  } else if (variant === 'secondary') {
    variantClasses = 'bg-secondary focus:ring-teal-300 hover:bg-teal-200';
  } else if (variant === 'warm') {
    variantClasses = 'bg-warm text-white focus:ring-red-300 hover:bg-red-700';
  } else {
    variantClasses = 'bg-white text-primary border border-gray-200 focus:ring-gray-300 hover:bg-gray-100';
  }

  if (buttonStyle === 'rounded') {
    styleClasses = 'rounded-lg';
  } else {
    styleClasses = 'rounded-full';
  }

  if (size === 'small') {
    sizeClasses = 'px-3 py-2 text-sm';
  } else if (size === 'medium') {
    sizeClasses = 'px-5 py-2.5 text-sm';
  } else if (size === 'large') {
    sizeClasses = 'px-5 py-3 text-base';
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${styleClasses} ${sizeClasses}`} {...props}>
      {children}
    </button>
  );
}
