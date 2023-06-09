import type { HTMLAttributes } from 'react';
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
      <NavLink {...props} className="text-green-500">
        {props.children}
      </NavLink>
    </div>
  );
}
