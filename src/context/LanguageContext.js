// src/context/LanguageContext.js
import React, { createContext } from 'react';
import en from '../translations/en.json';
import sw from '../translations/sw.json';

const translations = {
  en,
  sw,
};

const LanguageContext = createContext();

export default LanguageContext;
export { translations };