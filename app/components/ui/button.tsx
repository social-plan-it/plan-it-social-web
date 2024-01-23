import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'warm' | 'outlined';
  buttonStyle: 'rounded' | 'fullyRounded';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, buttonStyle, size, children, ...props }: ButtonProps) {
  const baseClasses = 'w-full sm:w-fit me-2 mb-2 text-center font-medium focus:outline-none focus:ring-4';
  let variantClasses = '';
  const styleClasses = buttonStyle === 'rounded' ? 'rounded-lg' : 'rounded-full';
  let sizeClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-primary text-white focus:ring-gray-300 hover:bg-gray-900';
      break;
    case 'secondary':
      variantClasses = 'bg-secondary focus:ring-teal-300 hover:bg-teal-200';
      break;
    case 'warm':
      variantClasses = 'bg-warm text-white focus:ring-red-300 hover:bg-red-700';
      break;
    default:
      variantClasses = 'bg-white text-primary border border-gray-200 focus:ring-gray-300 hover:bg-gray-100';
  }

  switch (size) {
    case 'small':
      sizeClasses = 'px-3 py-2 text-sm';
      break;
    case 'medium':
      sizeClasses = 'px-5 py-2.5 text-sm';
      break;
    default:
      sizeClasses = 'px-5 py-3 text-base';
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${styleClasses} ${sizeClasses}`} {...props}>
      {children}
    </button>
  );
}
