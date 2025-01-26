import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6" role="contentinfo">
      <div className="container mx-auto text-center">
        <p>© 2024 A11yne Accessibility Consulting. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:underline focus:outline focus:ring-2 focus:ring-white">
            Privacy Policy
          </a> |{' '}
          <a href="/terms-and-conditions" className="hover:underline focus:outline focus:ring-2 focus:ring-white">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
