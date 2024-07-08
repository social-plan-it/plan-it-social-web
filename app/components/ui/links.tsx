import type { HTMLAttributes, ReactNode } from 'react';
import type { NavLinkProps, LinkProps as RemixLinkProps } from '@remix-run/react';
import { NavLink, Link as RemixLink } from '@remix-run/react';

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
      <NavLink {...props} className="text-green-500">
        {props.children}
      </NavLink>
    </div>
  );
}

type DefaultLinkProps = RemixLinkProps & {
  children: ReactNode;
  to: string;
};

export function DefaultLink({ to, children, ...props }: DefaultLinkProps) {
  return (
    <RemixLink {...props} to={to} className="font-medium text-primary hover:underline hover:underline-offset-4">
      {children}
    </RemixLink>
  );
}
