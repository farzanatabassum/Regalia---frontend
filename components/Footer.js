import React from 'react'
import Link from 'next/link'
import { RiFacebookFill} from 'react-icons/ri';
import { GrTwitter } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-700">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href={'/'}><a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl text-white">Regalia</span>
    </a></Link>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">© 2022 Regalia 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-white">
      <RiFacebookFill className='text-2xl'/>
      </a>
      <a className="ml-3 text-white">
        <GrTwitter className='text-2xl'/>
      </a>
      <a className="ml-3 text-white">
        <BsInstagram className='text-2xl'/>
      </a>
      <a className="ml-3 text-white">
       <FiLinkedin className='text-2xl'/>
      </a>
    </span>
  </div>
</footer>
      
    </div>
  )
}

export default Footer
