import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const listings = [
  {
    id: 1,
    title: 'Fresh Organic Eggs',
    price: 'TSh 7,000',
    location: 'Dar es Salaam',
    image: 'https://via.placeholder.com/400x300.png/A8E6CF/000000?text=Fresh+Eggs',
    phone: '+255712345678',
  },
  {
    id: 2,
    title: 'Wholesale Egg Tray',
    price: 'TSh 6,500',
    location: 'Arusha',
    image: 'https://via.placeholder.com/400x300.png/FFD3B6/000000?text=Egg+Tray',
    phone: '+255743210987',
  },
  {
    id: 3,
    title: 'Village Free-Range Eggs',
    price: 'TSh 8,000',
    location: 'Dodoma',
    image: 'https://via.placeholder.com/400x300.png/DCEDC1/000000?text=Free-Range',
    phone: '+255765432109',
  },
];

const Listings = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((egg) => (
        <div key={egg.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <img src={egg.image} alt={egg.title} className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-900">{egg.title}</h3>
            <div className="mt-2 space-y-2 text-gray-600">
              <p>{t('price')}: <span className="font-semibold text-gray-800">{egg.price}</span></p>
              <p>{t('location')}: <span className="font-semibold text-gray-800">{egg.location}</span></p>
            </div>
            <a href={`tel:${egg.phone}`} className="block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
              {t('contact_seller')}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;