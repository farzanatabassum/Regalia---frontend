import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
const about = () => {
  return (
    <div>
      <Navbar />
      <div >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image
                src="/aboutimg.jpeg"
                alt="homepage"
                width={600}
                height={500}
              ></Image>
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-16 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-xl title-font  mb-3 font-bold">
                    About
                  </h2>
                  <p className="leading-relaxed text-base mb-8">
                    {' '}
                    Welcome to Regalia. We are a cloud store open to thousands
                    of reused branded clothes, where you get to choose the best
                    fit for you, be it casual wear, party wear, traditional,
                    formal, etc., that too only based on your preference.
                  </p>
                  <p className="leading-relaxed text-base mb-4">
                    Buy all those branded pieces and uplift your style as you
                    will just get to view and buy pieces chosen by us for you
                    according to what you are looking for.
                  </p>
                  Happy shopping!
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default about;
