import React, { useState, useEffect } from 'react';
import useShop from '../ShopContext';

const Product = ({ product }) => {
  const { addToCart, products, removeFromCart } = useShop();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = products.some((pro) => pro.id === product.id);
    setIsInCart(isProductInCart);
    console.log(isProductInCart)
  }, [products, product.id]);

  const handleAddCart = () => {
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.urlImage} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
        <button 
          onClick={handleAddCart} 
          className={`mt-4 px-4 py-2 rounded text-white ${isInCart ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"}`}
        >
          {isInCart ? '-' : '+'}
        </button>
      </div>
    </div>
  );
};

export default Product;
