import React from 'react'
import Link from 'next/link';


const SignIn = () => {
  return (
    <div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Regalia
            </h1>
            <h2 className="mt-6 text-center text-base font-bold tracking-tight text-gray-900">
              SIGN IN TO YOUR ACCOUNT
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                <span> Or </span>
              
              <Link href="/signup">
                <a
                  href="#"
                  className="font-medium text-gray-800 hover:text-gray-600"
                >
                 SIGN UP
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <h2 className='mb-2'>Email Address</h2>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mb-8 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
              <h2 className='mb-2'>Password</h2>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
        <div className="text-sm">
         <Link href='/forgot'><a href="#" className="font-medium text-gray-600 hover:text-gray-500">Forgot your password?</a></Link> 
        </div>
      </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default SignIn
