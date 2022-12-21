import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { updatePassword } from '../express_api/user';
const UpdatePassword = ({ id, token }) => {
  const [newPassword, setNPassword] = useState('');
  const [confirmPassword, setCPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleConfirmPassword = (event) => {
    if (event.target.value !== newPassword) {
      setError('Password does not match');
      setCPassword(event.target.value);
    } else {
      setError('');
      setCPassword(event.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await updatePassword(
      newPassword,
      confirmPassword,
      id,
      token
    );
    try {
      if (newPassword !== confirmPassword) {
        toast.error('Password does not match', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      } else {
        if (!userData.error) {
          setNPassword('');
          setCPassword('');
          toast.success('Password updated', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          //navigating to login
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* React toastify */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex min-h-full items-center justify-center py-36 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
              Regalia
            </h1>
            <h2 className="mt-3.5 text-center text-base font-bold tracking-tight text-gray-900">
              UPDATE PASSWORD
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-2 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <h2 className="mb-1">New Password</h2>
                <label htmlFor="newPassword" className="sr-only">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mb-2 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNPassword(e.target.value)}
                />
                {/* validate the password length */}
                {newPassword.length < 7 && (
                  <h1 className="text-red-600 mb-1">
                    Password must be at least 7 characters long
                  </h1>
                )}
              </div>
              <div>
                <h2 className="mb-1">Confirm Password</h2>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mb-2 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                />
                <h1 className="text-red-600 mb-1">{error}</h1>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
