import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const authtoken = localStorage.getItem('Token');
    if (authtoken) {
      setUser({ value: authtoken });
      setKey(Math.random());
    }
  }, [router.query]);
  //logout
  const logout = async () => {
    localStorage.removeItem('Token');
    setUser({ value: null });
    router.reload();
    //navigating to homepage
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };
  return (
    <div>
      <nav className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <h1 className="px-15 py-7  text-3xl font-extrabold mr-auto">
                Regalia
              </h1>
              <div className="flex flex-shrink-0 items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex justify-center ">
                    <Link href="/">
                      <li className="ml-96 text-gray-900 px-12 py-7 rounded-md text-sm font-medium">
                        <a>Home</a>
                      </li>
                    </Link>
                    <Link href="/about">
                      <li className="text-gray-900 hover:bg-gray-500 hover:text-white px-12 py-7 rounded-md text-sm font-medium">
                        <a>About</a>
                      </li>
                    </Link>
                    <Link href="/sellwithus">
                      <li className="text-gray-900 hover:bg-gray-500 hover:text-white  px-12 py-7 rounded-md text-sm font-medium">
                        <a>Sell with us</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className=" flex  h-auto items-center px-12 py-7">
                <a
                  onMouseOver={() => {
                    setDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                >
                  {dropdown && (
                    <div
                      onMouseOver={() => {
                        setDropdown(true);
                      }}
                      onMouseLeave={() => {
                        setDropdown(false);
                      }}
                      className="absolute right-8 bg-gray-400 top-9 rounded-md px-5 py-4 w-44 z-10"
                    >
                      <ul>
                        <Link href={'/seller'}>
                          <a>
                            {' '}
                            <li className="py-1  text-center text-base hover:bg-gray-600 rounded-md hover:text-white">
                              My Products
                            </li>
                          </a>
                        </Link>
                        <Link href={'/updatePreference'}>
                          <a>
                            {' '}
                            <li className="py-1  text-center text-base hover:bg-gray-600 rounded-md hover:text-white">
                              My Preferences
                            </li>
                          </a>
                        </Link>
                        <Link href={'/profile'}>
                          <a>
                            <li className="py-1 text-base text-center hover:bg-gray-600 rounded-md hover:text-white">
                              My Profile
                            </li>
                          </a>
                        </Link>
                        <li
                          onClick={logout}
                          className="py-1 text-base text-center hover:bg-gray-600 rounded-md hover:text-white"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                  {/* User logged in */}
                  {user.value && (
                    <RiAccountCircleLine className="text-xl md:text-2xl mx-2" />
                  )}
                </a>
                {/* User logged out */}
                {!user.value && (
                  <Link href="/login">
                    <button
                      type="button"
                      className=" text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-3 text-center "
                    >
                      Sign Up/Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 ">
            <ul>
              <Link href="/">
                <li className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </li>
              </Link>

              <Link href="/about">
                <li className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </li>
              </Link>

              <Link href="/sellwithus">
                <li className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Sell with us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
