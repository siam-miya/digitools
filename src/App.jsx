import React, { Suspense, useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Count from "./components/count/Count";
import Cards from "./components/cards/Cards";
import Cart from "./components/cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Steps from "./components/steps/Steps";
import PricingCard from "./components/pricingCard/PricingCard";
import Workflow from "./components/workflow/Workflow";
import Footer from "./components/footer/Footer";


const App = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]); 
  const [view, setView] = useState("products"); 

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleBuyNow = (product) => {
    const isExist = cart.find((item) => item.title === product.title);
    
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.title} added successfully!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.warn("This item is already in your cart.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleRemove = (title) => {
    const updatedCart = cart.filter((item) => item.title !== title);
    setCart(updatedCart);
    toast.error("Removed from cart", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <ToastContainer />
      <Navbar />
      <Banner />
      <Count />
      <div className="flex flex-col items-center my-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Premium Digital Tools</h1>
        <p className="text-gray-500 mb-8 text-center max-w-lg px-4">
          Choose from our curated collection of premium digital products designed to boost your productivity.
        </p>

        <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm">
          <button 
            onClick={() => setView("products")}
            className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${
              view === 'products' ? 'bg-[#7C3AED] text-white shadow-md' : 'bg-transparent text-gray-500'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setView("cart")}
            className={`px-8 py-2 rounded-full font-bold text-sm transition-all ${
              view === 'cart' ? 'bg-[#7C3AED] text-white shadow-md' : 'bg-transparent text-gray-500'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-20"><span className="loading loading-bars loading-xl"></span></div>}>
        <div className="container mx-auto">
          {view === "products" ? (
            cards.length > 0 ? (
              <Cards cards={cards} onBuyNow={handleBuyNow} />
            ) : (
              <p className="text-center py-10 text-gray-400 font-medium">Loading products...</p>
            )
          ) : (
            <Cart cart={cart} onRemove={handleRemove} />
          )}
        </div>
      </Suspense>
      <Steps/>
      <PricingCard/>
   <Workflow/>
   {/* <Footer/> */}
    </div>
  );
};

export default App;