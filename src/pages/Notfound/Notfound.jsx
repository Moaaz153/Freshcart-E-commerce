// import { Home, Search, Apple, Egg, Cookie, Fish, Phone, Mail, MessageCircle } from 'lucide-react';

import { faSignalMessenger } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Notfound() {
  return (
    <>
     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* 404 Header with Shopping Cart */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-9xl font-bold text-green-100">4</span>
            <div className="bg-green-100 rounded-full p-6">
              <div className="bg-green-500 rounded-lg p-3">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <span className="text-9xl font-bold text-green-100">4</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-2">
            The page you're looking for seems to have gone shopping!
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Don't worry, our fresh products are still available for you.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mb-12">
            <Link to="/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <FontAwesomeIcon icon={faHouse} />
              Back to Home
            </Link>
            <button className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Search Products
            </button>
          </div>
        </div>

        {/* Categories Section */}
        {/* <div className="text-center mb-12">
          <p className="text-gray-700 mb-6">Or explore our popular categories</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                <Apple className="text-green-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Fruits &</h3>
              <h3 className="font-semibold text-gray-800 text-sm">Vegetables</h3>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                <Egg className="text-green-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Dairy & Eggs</h3>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                <Cookie className="text-green-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Bakery & Snacks</h3>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                <Fish className="text-green-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Meat & Seafood</h3>
            </div>
          </div>
        </div> */}

        {/* Help Section */}
        <div className="bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Need Help?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Our customer support team is here to assist you 24/7
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="tel:+18001234567" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <FontAwesomeIcon icon={faPhone} />
              <span>+1 (800) 123-4567</span>
            </a>
            <a href="mailto:support@freshcart.com" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>support@freshcart.com</span>
            </a>
            <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <FontAwesomeIcon icon={faSignalMessenger} />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
