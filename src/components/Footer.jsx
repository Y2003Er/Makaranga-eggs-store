import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {currentYear} Makaranga Eggs Store. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;