import React, { useState } from 'react'
import Link from 'next/link';


const SignUp = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const handleChange=(e)=>{
    if(e.target.name==='name'){
      setName(e.target.value)
    }
    else if(e.target.name==='email'){
      setEmail(e.target.value)
    }
    else if(e.target.name==='password'){
      setPassword(e.target.value)
    }

  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const userData={name,email,password}
    let res=await fetch("http://localhost:5000/api/users/signup",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body: JSON.stringify(userData),
    })
    let response=await res.json()
    console.log(response)
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Regalia
            </h1>
            <h2 className="mt-6 text-center text-base font-bold tracking-tight text-gray-900">
              SIGN UP FOR AN ACCOUNT
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
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
              <h2 className='mb-2'>Name</h2>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input 
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className=" mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Your name"
                  value={name}

                  onChange={handleChange}
                />
              </div>
              <div>
              <h2 className='mb-2'>Email Address</h2>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={handleChange}

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
                  value={password}
                  onChange={handleChange}
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
  )
}

export default SignUp
