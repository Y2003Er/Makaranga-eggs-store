import React, { useState } from 'react';

function App() {
  // State for search and language
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('EN');

  // Product data with images (place images in the public folder)
  const products = [
    { name: 'Fresh Organic Eggs', price: 'TSh 7,000', location: 'Dar es Salaam', image: '/organic-eggs.jpg' },
    { name: 'Wholesale Egg Tray', price: 'TSh 6,500', location: 'Arusha', image: '/egg-tray.jpg' },
    { name: 'Village Free-Range Eggs', price: 'TSh 8,000', location: 'Village', image: '/free-range-eggs.jpg' },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Language content
  const content = {
    EN: {
      welcome: 'Welcome to Makaranga Eggs Store',
      description: 'The best place to find fresh, quality eggs from local farms across Tanzania.',
      listings: 'Our Current Listings',
      search: 'Search by name or location...',
      contact: 'Contact Seller',
    },
    SW: {
      welcome: 'Karibu Makaranga Eggs Store',
      description: 'Mahali pazuri zaidi pa kupata mayai safi na ya hali ya juu kutoka mashambani Tanzania.',
      listings: 'Orodha Zetu za Sasa',
      search: 'Tafuta kwa jina au eneo...',
      contact: 'Wasiliana na Muuzaji',
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Makaranga Logo" className="h-10 mr-2" />
          <h1 className="text-2xl font-bold">{content[language].welcome}</h1>
        </div>
        <div>
          <button
            onClick={() => setLanguage(language === 'EN' ? 'SW' : 'EN')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {language === 'EN' ? 'SW' : 'EN'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <p className="text-center text-gray-600 mb-8">{content[language].description}</p>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder={content[language].search}
            className="w-full md:w-1/2 lg:w-1/3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Listings */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">{content[language].listings}</h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">Price: {product.price}</p>
                <p className="text-gray-600">Location: {product.location}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 underline mt-2 block transition-colors"
                >
                  {content[language].contact}
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 mt-8 text-center text-gray-600">
        <p>&copy; 2025 Makaranga Eggs Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;