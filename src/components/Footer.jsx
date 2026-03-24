import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200 p-4 text-center text-gray-600">
      <p>Rick & Morty Explorer - Created with React Router</p>
      <p className="text-sm mt-1">Data provided by Rick and Morty API</p>
      <p className="text-xs mt-2">© {currentYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;