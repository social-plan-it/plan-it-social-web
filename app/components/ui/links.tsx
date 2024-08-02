import type { HTMLAttributes, ReactNode } from 'react';
import type { NavLinkProps } from '@remix-run/react';
import { NavLink } from '@remix-run/react';

type LinkProps = NavLinkProps & {
  className?: HTMLAttributes<HTMLDivElement>['className'];
  to: string;
};

/**
 * Reusable link component.
 * Classes are applied to a wrapping div to allow for flexbox
 * and other layout styles.
 */
export function Link(props: LinkProps) {
  return (
    <div className={props.className}>
      <NavLink {...props} className="font-medium text-green-700 hover:underline hover:underline-offset-4">
        {props.children}
      </NavLink>
    </div>
  );
}

type LinkButtonProps = {
  children: ReactNode;
  to: string;
  preventScrollReset?: boolean;
  prefetch?: LinkProps['prefetch'];
};

export function LinkButton({
  to,
  children,
  preventScrollReset = true,
  prefetch = 'intent',
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      to={to}
      prefetch="intent"
      className="border-2 bg-red-700 text-white rounded-lg p-3 w-full text-center"
      preventScrollReset={preventScrollReset}
      type="submit"
    >
      {children}
    </Link>
  );
}
