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
    <div className="min-h-screen bg-gradient-to-br from-makaranga-green/10 via-white to-makaranga-blue/10 font-sans">
      {/* Header with Modern Design */}
      <header className="bg-gradient-to-r from-makaranga-green to-makaranga-blue text-white shadow-lg p-6 flex justify-between items-center fixed w-full z-10">
        <div className="flex items-center space-x-6">
          <img src="/logo.png" alt="Makaranga Logo" className="h-14 animate-pulse" />
          <h1 className="text-5.5xl font-bold">{content[language].welcome}</h1>
        </div>
        <button
          onClick={() => setLanguage(language === 'EN' ? 'SW' : 'EN')}
          className="bg-white text-makaranga-blue px-5 py-3 rounded-full hover:bg-makaranga-gray/20 transition-transform transform hover:scale-105"
        >
          {language === 'EN' ? 'SW' : 'EN'}
        </button>
      </header>

      {/* Main Content with Padding for Fixed Header */}
      <main className="container mx-auto pt-28 pb-12 px-6">
        <div className="text-center mb-12">
          <p className="text-2xl text-makaranga-gray mb-6 animate-fade-in">{content[language].description}</p>
          <div className="relative">
            <input
              type="text"
              placeholder={content[language].search}
              className="w-full md:w-2/3 lg:w-1/2 p-5 border-2 border-makaranga-green rounded-xl shadow-md focus:outline-none focus:border-makaranga-blue transition-all duration-300 placeholder-makaranga-gray/70"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-makaranga-gray">🔍</span>
          </div>
        </div>

        {/* Listings with Impressive Grid */}
        <h2 className="text-4.5xl font-extrabold mb-10 text-transparent bg-gradient-to-r from-makaranga-green to-makaranga-blue bg-clip-text animate-slide-in">
          {content[language].listings}
        </h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center text-makaranga-gray text-xl animate-pulse">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border-2 border-makaranga-green/20 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 p-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-lg mb-5 transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-makaranga-gray mt-3">Price: <span className="text-makaranga-green">{product.price}</span></p>
                <p className="text-makaranga-gray">Location: {product.location}</p>
                <a
                  href="#"
                  className="mt-5 inline-block bg-makaranga-blue text-white px-7 py-3 rounded-full hover:bg-makaranga-blue/80 transition-colors animate-bounce"
                >
                  {content[language].contact}
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer with Modern Touch */}
      <footer className="bg-gradient-to-r from-makaranga-green to-makaranga-blue text-white p-6 text-center">
        <p className="text-xl">© 2025 Makaranga Eggs Store. All rights reserved.</p>
        <div className="mt-3 space-x-6">
          <a href="#" className="hover:text-makaranga-gray/80">Facebook</a>
          <a href="#" className="hover:text-makaranga-gray/80">Twitter</a>
          <a href="#" className="hover:text-makaranga-gray/80">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

// Simple CSS animations (now using Tailwind's keyframes)
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