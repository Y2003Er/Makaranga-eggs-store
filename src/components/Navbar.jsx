import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary">Makaranaga Eggs</div>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-primary">Home</a></li>
        <li><a href="#products" className="hover:text-primary">Products</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
      </ul>
    </nav>
  );
}