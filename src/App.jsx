import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Footer from './components/Footer';
import LanguageContext, { translations } from './context/LanguageContext';

function App() {
  const [language, setLanguage] = useState('en');
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t('our_listings')}</h2>
            <Listings />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;