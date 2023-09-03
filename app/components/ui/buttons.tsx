import type { SerializeFrom } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';
import { useEffect } from 'react';

import type { loader } from '~/root';

export function SignInWithGoogleButton() {
  const data = useRouteLoaderData('root') as SerializeFrom<typeof loader> | undefined;

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.src = 'https://accounts.google.com/gsi/client';
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={data?.ENV.PUBLIC_GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="/login"
        data-itp_support="true"
      />

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left"
      />
    </>
  );
}
