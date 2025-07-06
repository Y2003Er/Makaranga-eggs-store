import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

export default function App() {
  const products = [
    { title: "Organic Eggs", price: "Rs. 300/dozen", image: "/images/organic-egg.jpg" },
    { title: "Free Range Eggs", price: "Rs. 280/dozen", image: "/images/free-range-egg.jpg" },
  ];

  return (
    <div className="font-opensans">
      <Navbar />
      <Hero />
      
      {/* Products Section */}
      <section id="products" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Eggs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}