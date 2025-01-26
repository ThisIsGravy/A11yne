import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0033cc] text-white p-4" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Accessibility Hub</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline focus:outline focus:ring-2 focus:ring-white">Home</Link></li>
          <li><Link to="/about-us" className="hover:underline focus:outline focus:ring-2 focus:ring-white">About Us</Link></li>
          <li><Link to="/services" className="hover:underline focus:outline focus:ring-2 focus:ring-white">Services</Link></li>
          <li><Link to="/case-studies" className="hover:underline focus:outline focus:ring-2 focus:ring-white">Case Studies</Link></li>
          <li><Link to="/pricing-calculator" className="hover:underline focus:outline focus:ring-2 focus:ring-white">Pricing Calculator</Link></li>
          <li><Link to="/resources" className="hover:underline focus:outline focus:ring-2 focus:ring-white">Resources</Link></li>
          <li><Link to="/contact-us" className="hover:underline focus:outline focus:ring-2 focus:ring-white">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
