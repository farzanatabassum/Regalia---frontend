import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'; 
import { signup } from '../express_api/signup';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await signup( name, email,gender, password) ;
    try {
      if(!userData.error){
        setName('');
        setEmail('');
        setGender('');
        setPassword('');
        //setting the token
        localStorage.setItem("Token",userData.token)
        toast.success('Your account has been created', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        //navigating to preference 
        setTimeout(() => {
          router.push('/preference')
        }, 1000);

      }
     
    } catch (error) {
      toast.error('Invalid credentials', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
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
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
              Regalia
            </h1>
            <h2 className="mt-2 text-center text-base font-bold tracking-tight text-gray-900">
              SIGN UP FOR AN ACCOUNT
            </h2>
            <p className="mt-1 text-center text-sm text-gray-600">
              <span> Or </span>

              <Link href="/login">
                <a
                  href="#"
                  className="font-medium text-gray-800 hover:text-gray-600"
                >
                  LOGIN
                </a>
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-1 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {/* Name */}
              <div>
                <h2 className="mb-1">Name</h2>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Your name"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
              {/*Email Address  */}
              <div>
                <h2 className="mb-1">Email Address</h2>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              {/* Gender */}
              <div>
                <h2 className="mb-1">Gender</h2>
                <label htmlFor="gender" className="sr-only">
                  Gender
                </label>
                <select  name='gender' value={gender} onChange={(e)=>{setGender(e.target.value)}} className="mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm bg-gray-50  p-2.5 ">
                  <option defaultValue>Choose a gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>   
                </select>        
              </div>
              {/* Password */}
              <div>
                <h2 className="mb-1">Password</h2>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
