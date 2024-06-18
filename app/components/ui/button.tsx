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

function getVariantClasses(variant: (typeof variants)[keyof typeof variants]) {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-white focus:ring-gray-300 hover:bg-gray-900';

    case 'secondary':
      return 'bg-secondary focus:ring-teal-300 hover:bg-teal-200';

    case 'warm':
      return 'bg-warm text-white focus:ring-red-300 hover:bg-red-700';

    // Outlined style
    default:
      return 'bg-white text-primary hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 hover:bg-gray-100';
  }
}

function getStyleClasses(buttonStyle: (typeof buttonStyles)[keyof typeof buttonStyles]) {
  return buttonStyle === 'rounded' ? 'rounded-lg' : 'rounded-full';
}

export function Button({ variant, buttonStyle, icon, disabled, children, ...props }: CombinedButtonProps) {
  let baseClasses =
    'w-full sm:w-fit me-2 mb-2 px-3 sm:px-5 py-2 sm:py-2.5 md:py-3 text-center text-sm md:text-base font-medium focus:outline-none focus:ring-4';

  let variantClasses = getVariantClasses(variant);
  let styleClasses = getStyleClasses(buttonStyle);

  if (icon) {
    baseClasses += ' inline-flex items-center justify-center';
  }

  if (disabled) {
    variantClasses =
      'w-full sm:w-fit me-2 mb-2 px-3 sm:px-5 py-2 sm:py-2.5 md:py-3 text-center text-sm md:text-base font-medium bg-gray-300 text-gray-600 opacity-75 cursor-not-allowed';
    baseClasses = '';
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${styleClasses}`} {...props}>
      {children}
    </button>
  );
}

export function AuthButton({ variant, buttonStyle, icon, disabled, children, ...props }: CombinedButtonProps) {
  let baseClasses = 'w-full py-3 text-center text-base font-normal focus:outline-none focus:ring-4 py-3';
  let variantClasses = getVariantClasses(variant);
  let styleClasses = getStyleClasses(buttonStyle);

  if (icon) {
    baseClasses += ' inline-flex items-center justify-center';
  }

  if (disabled) {
    variantClasses =
      'w-full py-3 text-center text-base font-normal bg-gray-300 text-gray-600 opacity-75 cursor-not-allowed';
    baseClasses = '';
  }

  return (
    <button type="submit" className={`${baseClasses} ${variantClasses} ${styleClasses}`} {...props}>
      {children}
    </button>
  );
}
