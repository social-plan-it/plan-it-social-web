import type { ButtonHTMLAttributes } from 'react';

type VariantProps = 'primary' | 'secondary' | 'warm' | 'outlined';

type ButtonStyleProps = 'rounded' | 'fullyRounded';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: VariantProps;
  buttonStyle: ButtonStyleProps;
  children: React.ReactNode;
  icon?: boolean;
  disabled?: boolean;
};

function getVariantClasses(variant: VariantProps) {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-white focus:ring-gray-300 hover:bg-gray-900';

    case 'secondary':
      return 'bg-secondary focus:ring-teal-300 hover:bg-teal-200';

    case 'warm':
      return 'bg-warm text-white focus:ring-red-300 hover:bg-red-700';

    default: // Outlined style
      return 'bg-white text-primary hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 hover:bg-gray-100';
  }
}

function getStyleClasses(buttonStyle: ButtonStyleProps) {
  return buttonStyle === 'rounded' ? 'rounded-lg' : 'rounded-full';
}

export function Button({ variant, buttonStyle, icon, disabled, children, ...props }: BaseButtonProps) {
  let baseClasses = 'w-full px-6 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4';

  let variantClasses = getVariantClasses(variant);
  let styleClasses = getStyleClasses(buttonStyle);

  if (icon) {
    baseClasses += ' inline-flex items-center justify-center';
  }

  if (disabled) {
    variantClasses =
      'w-full px-6 py-2.5 text-center text-sm font-medium bg-gray-300 text-gray-600 opacity-75 cursor-not-allowed';
    baseClasses = '';
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${styleClasses}`} {...props}>
      {children}
    </button>
  );
}
