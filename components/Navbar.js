import React from 'react';
import Link from 'next/link';

const Navbar = () => {
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
                <h1 className='px-10 py-7 text-3xl font-extrabold'>Regalia</h1>
              <div className="flex flex-shrink-0 items-center">
                <div className="hidden sm:ml-6 sm:block">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <ul className="flex justify-center ">
                    <Link href="/">
                      <li className=" text-gray-900  px-12 py-7 rounded-md text-sm font-medium">
                        Home
                      </li>
                    </Link>
                    <Link href="/about">
                      <li className="text-gray-900 hover:bg-gray-500 hover:text-white px-12 py-7 rounded-md text-sm font-medium">
                        About
                      </li>
                    </Link>
                    <Link href="/sellWithUs">
                      <li className="text-gray-900 hover:bg-gray-500 hover:text-white  px-12 py-7 rounded-md text-sm font-medium">
                        Sell with us
                      </li>
                    </Link>

                    <Link href="/signup">
                      <li className="text-gray-900 hover:bg-gray-500 hover:text-white  px-12 py-7 rounded-md text-sm font-medium ">
                        Sign Up/Login
                      </li>
                    </Link>
                  </ul>
                </div>
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
                <li className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </li>
              </Link>

              <Link href="/sellWithUs">
                <li className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Sell with us
                </li>
              </Link>

              <Link href="/signup">
                <li className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Sign Up/Login
                </li>
              </Link>
            </ul>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
