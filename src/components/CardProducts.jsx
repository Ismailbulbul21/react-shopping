import React, { useState } from 'react';
import useShop from '../ShopContext';

const CardProducts = () => {
  const { products, removeFromCart, total } = useShop();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {
    // Add your payment processing logic here
    alert('Payment processed successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Products Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          {products.map((product) => (
            <div key={product.id} className="flex mb-4 items-center">
              <img src={product.urlImage} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product)}
                className="ml-auto bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-semibold text-lg">Total: ${total}</div>
        </div>
        
        {/* Payment Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={paymentInfo.expirationDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handlePayment}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
