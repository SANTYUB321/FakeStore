import React from 'react'
import { useState } from 'react'

 export const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <header className="w-full h-20 bg-cover bg-center border-b-4 border-orange-500"  >
      <p className='text'>Fake Store</p>
        <div className="relative">
          <button
            onClick={() => setCartVisible(!cartVisible)}
            className="flex items-center justify-center w-12 h-10 bg-transparent border-0"
          >
           <svg 
           class="w-6 h-6 
           text-gray-800 
           dark:text-white" 
           aria-hidden="true" 
           xmlns="http://www.w3.org/2000/svg" 
           width="40" 
          
           fill="none" 
           viewBox="0 0 24 24">
  <path 
  stroke="currentColor" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  stroke-width="2" 
  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>

            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
              0
            </div>
          </button>

          {cartVisible && (
            <div className="absolute top-20 right-20 bg-white w-80 box-shadow-xl border-radius-md z-100">
              {/* Aquí van los productos del carrito */}
              <div className="flex justify-between p-6 border-b">
                <div className="flex">
                  <span className="text-xl font-semibold">1</span>
                  <p className="mx-6">Producto</p>
                  <span>$80</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setCartVisible(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
    </header>
  );
};

