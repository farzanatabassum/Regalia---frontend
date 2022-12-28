import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image';
const about = () => {
  return (
    <div>
        <Navbar/>
        <div >
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <Image
        src="/about.jfif"
        alt="homepage"
        width={720}
        height={380}
      ></Image> 
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold">About</h2>
          <p className="leading-relaxed text-base mb-48">Bonjour! Welcome to Regalia. We are open to thousands of reused branded
          clothes, where you get to choose the best fit for you, be it a casual
          wear, or a party wear based on your preference only. Buy all those
          branded pieces and uplift your style. Happy shopping!</p>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
       
    
      <Footer/>
    </div>
  );
};

export default about;
