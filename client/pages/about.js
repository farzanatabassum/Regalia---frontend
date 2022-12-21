import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image';
const about = () => {
  return (
    <div>
        <Navbar/>
        <div >
        <h1 className='flex justify-center mt-8 mb-10 text-lg font-bold'>About</h1>
        <p className='flex items-center px-72 mb-14'>
          Bonjour! Welcome to Regalia. We are open to thousands of reused branded
          clothes, where you get to choose the best fit for you, be it a casual
          wear, or a party wear based on your preference only. Buy all those
          branded pieces and uplift your style. Happy shopping!
        </p>
      </div>
      <div className='flex justify-center mb-28'>
      <Image
        src="/aboutimg.png"
        alt="homepage"
        width={970}
        height={250}
      ></Image>

      </div>
       
    
      <Footer/>
    </div>
  );
};

export default about;
