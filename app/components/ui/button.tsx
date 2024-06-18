import type { ButtonHTMLAttributes } from 'react';

export const variants = {
  primary: 'primary',
  secondary: 'secondary',
  warm: 'warm',
  outlined: 'outlined',
} as const;

export const buttonStyles = {
  rounded: 'rounded',
  fullyRounded: 'fullyRounded',
} as const;

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: (typeof variants)[keyof typeof variants];
  buttonStyle: (typeof buttonStyles)[keyof typeof buttonStyles];
  children: React.ReactNode;
  disabled?: boolean;
};

type ButtonProps = BaseButtonProps & {
  icon?: false;
};

type ButtonAndIconProps = BaseButtonProps & {
  icon?: true;
  'aria-label': string;
};

type CombinedButtonProps = ButtonProps | ButtonAndIconProps;

export function Button({ variant, buttonStyle, icon, disabled, children, ...props }: CombinedButtonProps) {
  let baseClasses =
    'w-full sm:w-fit me-2 mb-2 text-center font-medium focus:outline-none focus:ring-4 px-3 py-2 text-sm sm:px-5 sm:py-2.5 md:py-3 md:text-base';
  let variantClasses = '';
  let styleClasses = '';

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

  if (icon) {
    baseClasses += ' inline-flex items-center justify-center';
  }

  if (disabled) {
    variantClasses += ' opacity-75 cursor-not-allowed';
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${styleClasses}`} {...props}>
      {children}
    </button>
  );
}

export function AuthButton({ variant, buttonStyle, icon, disabled, children, ...props }: CombinedButtonProps) {
  let baseClasses = 'w-full text-center font-normal focus:outline-none focus:ring-4 py-3 md:text-base';
  let variantClasses = '';
  let styleClasses = '';
  if (variant === 'primary') {
    variantClasses = 'bg-primary text-white focus:ring-gray-300 hover:bg-gray-900';
  }
  if (variant === 'warm') {
    variantClasses = 'bg-warm text-white focus:ring-red-300 hover:bg-red-700';
  }
  if (variant === 'secondary') {
    variantClasses = 'bg-secondary focus:ring-teal-300 hover:bg-teal-200';
  }
  if (variant === 'outlined') {
    variantClasses = 'bg-white text-primary border border-gray-200 focus:ring-gray-300 hover:bg-gray-100';
  }
  if (icon) {
    baseClasses += ' inline-flex items-center justify-center';
  }
  if (disabled) {
    variantClasses += ' opacity-75 cursor-not-allowed';
  }
  if (buttonStyle === 'rounded') {
    styleClasses = 'rounded-lg';
  } else {
    styleClasses = 'rounded-full';
  }
  return (
    <button type="submit" className={`${baseClasses} ${variantClasses} ${styleClasses}`} {...props}>
      {children}
    </button>
  );
}
