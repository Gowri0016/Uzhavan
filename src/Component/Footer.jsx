import React from "react";
import { FaLeaf, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-green-800 to-green-600 text-white mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Branding */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLeaf size={28} className="text-lime-300" />
            <h1 className="text-2xl font-bold">Uzhavan</h1>
          </div>
          <p className="text-sm text-green-100">
            Empowering farmers with digital tools and sustainable practices for a greener tomorrow.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-lime-100">Quick Links</h2>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="/" className="hover:text-lime-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-lime-300 transition">About</a></li>
            <li><a href="#" className="hover:text-lime-300 transition">Fertilizer Services</a></li>
            <li><a href="#" className="hover:text-lime-300 transition">Community</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-lime-100">Contact Us</h2>
          <div className="space-y-3 text-sm text-green-100">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> contact@agrofarm.in
            </p>
            <div className="flex gap-4 mt-3">
              <a href="#"><FaFacebookF className="hover:text-lime-300" /></a>
              <a href="#"><FaTwitter className="hover:text-lime-300" /></a>
              <a href="#"><FaInstagram className="hover:text-lime-300" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-500 pt-4 text-center text-sm text-green-100">
        © {new Date().getFullYear()} AgroFarm. All rights reserved.
      </div>
    </footer>
  );
}
