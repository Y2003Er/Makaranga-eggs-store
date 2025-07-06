import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Hero = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="bg-green-50 text-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">
        {t('welcome')}
      </h1>
      <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
        {t('hero_subtitle')}
      </p>
    </div>
  );
};

export default Hero;