import React from 'react';
import { Link } from 'react-router-dom';
import useShop from '../ShopContext';

const Navbar = () => {
  const { products } = useShop();

  return (
    <div className="flex bg-gray-100 items-center justify-between px-4 mt-3 p-4 rounded-lg">
      <Link className="text-2xl font-bold text-blue-500 tracking-wide" to="/">
        Bulbul
      </Link>
      <div className="flex uppercase gap-12 text-lg">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <Link className="flex justify-center items-center border-2 rounded-full px-5 py-3 font-bold text-lg text-white bg-blue-700" to="/cart">
        {products.length}
      </Link>
    </div>
  );
};

export default Navbar;
