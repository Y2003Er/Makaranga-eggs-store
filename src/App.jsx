import { Egg, MapPin, Phone, MessageCircle } from 'lucide-react';

const phoneNumber = '0752634990';

const products = [
  {
    title: 'Fresh Organic Eggs',
    price: 'TSh 7,000',
    location: 'Dar es Salaam',
    image: 'https://via.placeholder.com/400x300?text=Organic+Eggs',
  },
  {
    title: 'Wholesale Egg Tray',
    price: 'TSh 6,500',
    location: 'Arusha',
    image: 'https://via.placeholder.com/400x300?text=Wholesale+Tray',
  },
  {
    title: 'Village Free-Range Eggs',
    price: 'TSh 8,000',
    location: 'Dodoma',
    image: 'https://via.placeholder.com/400x300?text=Free-Range+Eggs',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-green-700 cursor-default">
            Makaranga Fresh Eggs Store
          </h1>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-white text-center px-6 py-20">
        <h2 className="text-4xl font-bold mb-3 text-green-700">
          Fresh, Local, Quality Eggs
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Sourced directly from our farms across Tanzania and delivered with care.
        </p>
        <a
          href="#products"
          className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Browse Products
        </a>
      </header>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map(({ title, price, location, image }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-1">{title}</h3>
            <p className="text-gray-700"><strong>Price:</strong> {price}</p>
            <p className="flex items-center text-sm text-gray-500 mb-4 mt-1">
              <MapPin size={16} className="mr-1" />
              {location}
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <a
                href={`https://wa.me/255${phoneNumber.slice(1)}?text=Hello,+I+want+to+order+${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition"
              >
                <MessageCircle size={16} /> Order on WhatsApp
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="border border-green-600 text-green-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-50 transition"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-sm text-gray-600 py-6">
        <p>📞 {phoneNumber} | WhatsApp or Call to Order</p>
        <p>© 2025 Makaranga Fresh Eggs Store. All rights reserved.</p>
      </footer>
    </div>
  );
}