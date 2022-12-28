import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { getUser } from '../express_api/user';
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState({ value: null });
  const [name, setName] = useState('');
  const [key, setKey] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const authtoken = localStorage.getItem('Token');
    if (authtoken) {
      setUser({ value: authtoken });
      setKey(Math.random());
      getUser().then((data) => {
        setName(data.name);
      });
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
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
              <h1 className="text-3xl font-extrabold mr-auto">Regalia</h1>

              <div className="hidden sm:ml-6 sm:block">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <ul className="flex space-x-4 ">
                  <Link href="/">
                    <li className="text-gray-900 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="text-gray-900 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </li>
                  </Link>
                  <Link href="/sellwithus">
                    <li className="text-gray-900 hover:bg-gray-500 hover:text-white  px-3 py-2 rounded-md text-sm font-medium">
                      Sell with us
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                    className="absolute right-8 bg-gray-400 top-11 rounded-md px-5 py-4 w-44 z-10"
                  >
                   
                    <ul>
                      <Link href={'/seller'}>
                        <li className="py-1  text-center text-base hover:bg-gray-600 rounded-md hover:text-white">
                          My Products
                        </li>
                      </Link>
                      <Link href={'/updatePreference'}>
                        <li className="py-1  text-center text-base hover:bg-gray-600 rounded-md hover:text-white">
                          My Preferences
                        </li>
                      </Link>
                      <Link href={'/profile'}>
                        <li className="py-1 text-base text-center hover:bg-gray-600 rounded-md hover:text-white">
                          My Profile
                        </li>
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
                  <RiAccountCircleLine className="text-xl md:text-2xl mx-5 mt-5" />                
                )}
                {user.value && (
                   <h3>{name.split(' ')[0]}</h3>
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

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

            <ul>
              <Link href="/">
                <li className="text-gray-900 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="text-gray-900 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  About
                </li>
              </Link>
              <Link href="/sellwithus">
                <li className="text-gray-900 hover:bg-gray-500 hover:text-white  px-3 py-2 rounded-md text-base font-medium">
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
