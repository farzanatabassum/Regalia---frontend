import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const UpdatePassword = ({id,token}) => {
  const [newPassword, setNPassword] = useState();
  const [confirmPassword, setCPassword] = useState();
  const router=useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { newPassword, confirmPassword };
    try {
      
      let res = await fetch(
        `http://localhost:5000/api/users/forgotPassword/${id}/${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );
      let response = await res.json();
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
        router.push('/login')
      }, 1000);
      return response
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
                <label htmlFor="npassword" className="sr-only">
                  New Password
                </label>
                <input
                  id="npassword"
                  name="newPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNPassword(e.target.value)}
                />
              </div>
              <div>
                <h2 className="mb-1">Confirm Password</h2>
                <label htmlFor="cpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="cpassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
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
