import React from 'react'
import Link from 'next/link';


const ForgotPassword = () => {
  return (
    <div>
        <div className="flex min-h-full items-center justify-center py-36 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
              Regalia
            </h1>
            <h2 className="mt-3.5 text-center text-base font-bold tracking-tight text-gray-900">
              FORGOT PASSWORD
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
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
          <form className="mt-2 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <h2 className='mb-1'>Email Address</h2>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mb-4 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
             
            </div>
           

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default ForgotPassword
