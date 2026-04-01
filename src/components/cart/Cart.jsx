import React from 'react';

const Cart = ({ cart, onRemove }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Cart</h2>

        {cart.length > 0 ? (
          <>
            <div className="space-y-4 mb-10">
              {cart.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-5 bg-[#F9FAFB] rounded-2xl border border-gray-50"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-2xl">
                      {item.icon || "🎁"}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-400 font-medium">${item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemove(item.title)}
                    className="text-pink-500 hover:text-pink-600 text-sm font-semibold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-400 font-medium">Total:</span>
                <span className="text-3xl font-bold text-gray-900">${totalPrice}</span>
              </div>
              
              <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-purple-100 active:scale-[0.98]">
                Proceed To Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-400 text-lg mb-4">Your cart is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;