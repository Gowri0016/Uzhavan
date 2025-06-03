import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DContext/Datas';

export default function Detail() {
  const { products, bannerData } = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState({});

  // Auto-slide banners
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  const handleQtyChange = (id, qty) => {
    setCart((prev) => ({ ...prev, [id]: qty }));
  };

  const handleAddToCart = (product) => {
    const qty = cart[product.id];
    if (!qty || qty <= 0) {
      alert('Please enter a valid quantity');
      return;
    }
    alert(`✅ Added ${qty} kg of ${product.name} to cart!`);
    // Hook in your backend or context here
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
      {/* Banner Carousel */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden mb-16 rounded-xl shadow-lg">
        {bannerData.map((banner, i) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${banner.bg} bg-opacity-50 flex flex-col items-center justify-center text-white text-center`}>
              <h2 className="text-4xl md:text-5xl font-extrabold">{banner.title}</h2>
              <p className="text-xl mt-3">{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Section */}
      <section className="mb-24">
        <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">Available Fertilizers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-green-300 p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
              <p className="text-green-700 text-lg font-medium mt-1 mb-3">₹{product.price} / kg</p>
              <input
                type="number"
                min="1"
                placeholder="Quantity (kg)"
                value={cart[product.id] || ''}
                onChange={(e) => handleQtyChange(product.id, Number(e.target.value))}
                className="w-full mb-4 border border-green-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
