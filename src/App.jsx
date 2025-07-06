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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-50 font-sans">
      {/* Header with Modern Design */}
      <header className="bg-gradient-to-r from-green-600 to-blue-500 text-white shadow-lg p-6 flex justify-between items-center fixed w-full z-10">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Makaranga Logo" className="h-12 animate-pulse" />
          <h1 className="text-3xl font-bold">{content[language].welcome}</h1>
        </div>
        <button
          onClick={() => setLanguage(language === 'EN' ? 'SW' : 'EN')}
          className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          {language === 'EN' ? 'SW' : 'EN'}
        </button>
      </header>

      {/* Main Content with Padding for Fixed Header */}
      <main className="container mx-auto pt-24 pb-12 px-6">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 mb-4 animate-fade-in">{content[language].description}</p>
          <div className="relative">
            <input
              type="text"
              placeholder={content[language].search}
              className="w-full md:w-2/3 lg:w-1/2 p-4 border-2 border-green-300 rounded-lg shadow-md focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Listings with Impressive Grid */}
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent animate-slide-in">
          {content[language].listings}
        </h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg animate-pulse">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border-2 border-green-200 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">Price: <span className="text-green-700">{product.price}</span></p>
                <p className="text-gray-600">Location: {product.location}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors animate-bounce"
                >
                  {content[language].contact}
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer with Modern Touch */}
      <footer className="bg-gradient-to-r from-green-600 to-blue-500 text-white p-6 text-center">
        <p className="text-lg">© 2025 Makaranga Eggs Store. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-200">Facebook</a>
          <a href="#" className="hover:text-gray-200">Twitter</a>
          <a href="#" className="hover:text-gray-200">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

// Simple CSS animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  .animate-fade-in { animation: fadeIn 1s ease-in; }
  .animate-slide-in { animation: slideIn 1s ease-out; }
  .animate-pulse { animation: pulse 2s infinite; }
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .animate-bounce { animation: bounce 2s infinite; }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

// Inject styles (for simplicity; consider using a CSS file in production)
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default App;