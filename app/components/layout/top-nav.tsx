import { useState } from 'react';
import { Form, Link, useNavigation } from '@remix-run/react';
import { useCurrentUser } from '~/hooks/useCurrentUser';

export function TopNav() {
  const currentUser = useCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="flex justify-start items-center max-w-screen-2xl mx-auto">
        <div className="text-white text-xl font-semibold flex justify-between items-center py-4 w-full">
          <Link to="/">
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1683267003/SocialPlanIt/SocialPlan-it-logo-Horizontal_xwm3xt.png"
              alt="Social Plan It horizontal logo"
            />
          </Link>
          <div className="hidden md:flex justify-between w-3/4 py-4">
            <ul className="flex">
              <Link to="/">
                <li className="text-2xl py-1 hover:py-0">Home</li>
              </Link>
              <Link to="/about-us">
                <li className="ml-4 text-2xl py-1 hover:py-0">About</li>
              </Link>
              <Link to="/events">
                <li className="ml-4 text-2xl py-1 hover:py-0">Events</li>
              </Link>
              <Link to="/groups">
                <li className="ml-4 text-2xl py-1 hover:py-0">Groups</li>
              </Link>
            </ul>
            {currentUser ? (
              <LogoutButton className="text-2xl py-1 hover:py-0" />
            ) : (
              <ul className="flex">
                <Link to="/login">
                  <li className="text-2xl py-1 hover:py-0">Log in</li>
                </Link>
                <Link to="/signup">
                  <li className="ml-4 bg-white text-primary rounded-full px-2 py-1 text-2xl hover:bg-primary hover:text-secondary hover:border-white hover:border-solid hover:py-0">
                    Sign up
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
        <button className="text-white block md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4">
          <Link className="block text-white py-2 px-4 hover:bg-gray-700" to="/">
            Home
          </Link>
          <Link className="block text-white py-2 px-4 hover:bg-gray-700" to="/about-us">
            About
          </Link>
          <Link className="block text-white py-2 px-4 hover:bg-gray-700" to="/events">
            Events
          </Link>
          <Link className="block text-white py-2 px-4 hover:bg-gray-700" to="/groups">
            Groups
          </Link>
          {currentUser ? (
            <LogoutButton className="w-full text-left text-white py-2 px-4 hover:bg-gray-700" />
          ) : (
            <>
              <Link className="block text-white py-2 px-4 hover:bg-gray-700" to="/login">
                Log in
              </Link>
              <Link className="block text-white py-2 px-4 hover:bg-gray-700" to="/signup">
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

function LogoutButton({ className }: { className?: string }) {
  const navigation = useNavigation();
  const formAction = '/logout';
  const isPending =
    navigation.formAction === formAction && (navigation.state === 'submitting' || navigation.state === 'loading');

  return (
    <Form method="post" action={formAction}>
      <button disabled={isPending} className={className}>
        {isPending ? 'Logging out...' : 'Log Out'}
      </button>
    </Form>
  );
}
