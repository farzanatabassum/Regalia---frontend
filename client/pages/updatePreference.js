import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UpdatePreference from '../components/UpdatePreference';

const updatePreference = () => {
  return (
    <div>
      <Navbar />
      <UpdatePreference />
      <Footer />
    </div>
  );
};

export default updatePreference;
