import { Bookmark } from 'lucide-react';
import React, { useState } from 'react';

function Wishlist() {
  const [savedProducts, setSavedProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

 
  const unsave = (product) => {
    setSavedProducts((prev) => {
      const updated = prev.filter(item => item.id !== product.id);
      localStorage.setItem('products', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="p-4 md:p-6 container mx-auto max-w-7xl ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {savedProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No items in Save</p>
        ) : (
          savedProducts.map((product) => (
            <div
              key={product?.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 
                        cursor-pointer w-full max-w-[300px] mx-auto flex flex-col overflow-hidden"
            >
              <div className="w-full h-28 sm:h-56">
                <img
                  src={product?.img}
                  alt={product?.alt || 'Product image'}
                  className="w-full h-full object-cover rounded-t-xl"
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex-grow flex flex-col items-start justify-between bg-gray-50 rounded-b-xl text-left">
                <div className="w-full flex items-center justify-between">
                  <h3 className="text-base font-semibold text-black line-clamp-2">{product?.name || 'Unknown Product'}</h3>
                  <button
                    className="p-2 transition hover:scale-105 active:scale-95"
                    aria-label="Unsave product"
                    onClick={() => unsave(product)}
                  >
                    <Bookmark className="w-5 h-5 text-black fill-current" />
                  </button>
                </div>
                <p className="text-red-600 font-bold text-lg mt-2">{product?.price || 'N/A'}</p>
                <p className="text-sm text-gray-500 mt-1">{product?.size || 'N/A'}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;