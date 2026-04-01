import React, { useState } from "react";
import digitools from "./../../assets/DigiTools.png";
import cart from "./../../assets/products/shopping-cart.png";
import NavLinks from "../NavLinks";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navData = [
    { id: 1, name: "Products", path: "/" },
    { id: 2, name: "Features", path: "/" },
    { id: 3, name: "Pricing", path: "/" },
    { id: 4, name: "Testimonials", path: "/" },
    { id: 5, name: "FAQ", path: "/" },
  ];

  return (
    // overflow-x-hidden dewa hoyeche jate sidebar baire thakle slider na ashe
    <nav className="py-5 bg-white relative z-[100] w-full overflow-x-hidden">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-[120]">
          <img src={digitools} alt="main-logo" className="w-28 md:w-32" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navData.map((element) => (
            <NavLinks key={element.id} element={element} />
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="p-2 cursor-pointer transition-transform active:scale-95">
            <img src={cart} alt="cart" className="w-6" />
          </button>
          <button className="font-semibold cursor-pointer hover:text-[#4F39F6]">Login</button>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-2 rounded-full font-medium shadow-lg transition hover:opacity-90">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Icon - z-index shobcheye beshi jate blur-er upore thake */}
        <div 
          className="md:hidden flex items-center z-[120] cursor-pointer" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[110] md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-8 pt-24 gap-6 text-lg font-medium">
            {navData.map((element) => (
              <NavLinks key={element.id} element={element} setOpen={setOpen} />
            ))}
            <hr className="my-2 border-gray-100" />
            <div className="flex flex-col gap-4">
              <button className="text-left font-bold text-gray-700">Login</button>
              <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3 rounded-xl text-center shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop (Overlay) - z-index sidebar-er niche (z-[105]) */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] md:hidden z-[105]"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;