import { Outlet } from '@remix-run/react';

export default function Component() {
  return (
    <div className="grow py-20 lg:py-40 bg-secondary w-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
