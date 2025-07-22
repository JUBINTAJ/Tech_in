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




    const [selectedImage, setSelectedImage] = useState(null);
  
   
    const openModal = (imgSrc) => {
      setSelectedImage(imgSrc);
    };
  
    
    const closeModal = () => {
      setSelectedImage(null);
    };

  return (
    <div className={`p-4 md:p-6 container mx-auto max-w-7xl ${savedProducts.length<=4?'h-screen':'h-'}`}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {savedProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 ">No items in Save</p>
        ) : (
          savedProducts.map((product) => (
            <div
              key={product?.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl  transition duration-300 
                        cursor-pointer w-full max-w-[300px] mx-auto flex flex-col overflow-hidden`}
            >
              <div className="w-full h-28 sm:h-56">
                <img
                  src={product?.img}
                  alt={product?.alt || 'Product image'}
                  className="w-full h-full object-cover rounded-t-xl"
                  loading="lazy"
                    onClick={() => openModal(product.img)} 
                />
              </div>

              <div className="p-4 flex-grow flex flex-col items-start justify-between bg-gray-50 rounded-b-xl text-left">
                <div className="w-full flex items-center justify-between">
                  <h3 className="text-base font-semibold text-black line-clamp-2">{product?.name || "Number Plate" }</h3>
                  <button
                    className="p-2 transition hover:scale-105 active:scale-95"
                    aria-label="Unsave product"
                    onClick={() => unsave(product)}
                  >
                    <Bookmark className="w-5 h-5 text-black fill-current" />
                  </button>
                </div>
                  <div className="flex items-center gap-2">
    <del className="text-[#565959] font-medium text-sm mt-2">
      <span className="text-sm">  </span>{product.offer}
    </del>
    <p className="text-red-600 font-bold text-lg mt-2">{product.price}</p>
  </div>
                <p className="text-sm text-gray-500 mt-1">{product?.size   }</p>
              </div>
            </div>
          ))
        )}
      </div>




            {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}  
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Full size product"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            {/* <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;