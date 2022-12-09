import React from 'react';
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <div>
        <Navbar/>
      <div >
        <h1 className='flex justify-center mt-8 text-lg font-bold'>About</h1>
        <p className='flex items-center px-60'>
          Bonjour! Welcome to Regalia. We are open to thousands of reused branded
          clothes, where you get to choose the best fit for you, be it a casual
          wear, or a party wear based on your preference only. Buy all those
          branded pieces and uplift your style. Happy shopping!
        </p>
      </div>
    </div>
  );
};

export default about;
