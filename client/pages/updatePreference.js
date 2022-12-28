import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UpdateProductPreference from '../components/UpdateProductPreference';

const updatePreference = () => {
  return (
    <div>
      <Navbar />
      <UpdateProductPreference />
      <Footer />
    </div>
  );
};

export default updatePreference;
