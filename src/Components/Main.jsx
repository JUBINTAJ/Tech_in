import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';
import products from '../Data/Product';

function Main() {
 
  const [savedStates, setSavedStates] = useState(products.map(product => {
    try {
      const savedItems = JSON.parse(localStorage.getItem('products')) || [];
      return savedItems.some(saved => saved.id === product.id) || false;
    } catch (e) {
      return false;
    }
  }));
 
  const [savedProducts, setSavedProducts] = useState(() => {
    try {
      const items = JSON.parse(localStorage.getItem('products'));
      return Array.isArray(items) ? items : [];
    } catch (e) {
      return [];
    }
  });

   
  const toggleSave = (index) => {
    const product = products[index];
    setSavedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
    setSavedProducts((prev) => {
   
      const prevArray = Array.isArray(prev) ? prev : [];
      if (prevArray.some(saved => saved.id === product.id)) {
      
        const updated = prevArray.filter(saved => saved.id !== product.id);
        localStorage.setItem('products', JSON.stringify(updated));
        return updated;
      } else {
        
        const updated = [...prevArray, product];
        localStorage.setItem('products', JSON.stringify(updated));
        return updated;
      }
    });
  };

  return (
    <div className="p-4 md:p-6 container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 justify-center items-center text-center ">Premium Number Plate</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 
                      cursor-pointer w-full max-w-[300px] mx-auto flex flex-col overflow-hidden"
          >
            <div className="w-full h-28 sm:h-56">
              <img
                src={product.img}
                alt={product.alt}
                className="w-full h-full object-cover rounded-t-xl"
                loading="lazy"
              />
            </div>

            <div className="p-4 flex-grow flex flex-col items-start justify-between bg-gray-50 rounded-b-xl text-left">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-base font-semibold text-black line-clamp-2">{product.name}</h3>
                <button
                  className="p-2 transition hover:scale-105 active:scale-95"
                  aria-label={savedStates[idx] ? 'Unsave product' : 'Save product'}
                  onClick={() => toggleSave(idx)}
                >
                  <Bookmark 
                    className={`w-5 h-5 ${savedStates[idx] ? 'text-black fill-current' : 'text-gray-500'}`} 
                  />
                </button> 
              </div>
              <p className="text-red-600 font-bold text-lg mt-2">{product.price}</p>
              <p className="text-sm text-gray-500 mt-1">{product.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;