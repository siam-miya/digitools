import React from 'react';

import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-400 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Features</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Templates</li>
              <li className="hover:text-white transition-colors cursor-pointer">Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm mb-8">
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Community</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-all cursor-pointer">
                <FaInstagram size={18} className="text-white"/> 
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-all cursor-pointer">
                <BiLogoFacebookCircle size={18} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7C3AED] transition-all cursor-pointer">
                <RiTwitterXFill size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 md:flex-row pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;