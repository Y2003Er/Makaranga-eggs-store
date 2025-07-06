import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const EggIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10a4 4 0 00-8 0C6 14.14 10 21 10 21s4-6.86 4-11z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <EggIcon />
            <span className="ml-2 text-xl font-bold text-gray-800">
              Makaranga Eggs Store
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                language === 'en' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('sw')}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                language === 'sw' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              SW
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;