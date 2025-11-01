
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-bg-light/80 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <div className="text-2xl font-bold text-secondary">
          Our Community
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#about" className="font-medium text-text-dark hover:text-primary transition-colors duration-300">About Us</a></li>
          <li><a href="#services" className="font-medium text-text-dark hover:text-primary transition-colors duration-300">Services</a></li>
          <li><a href="#events" className="font-medium text-text-dark hover:text-primary transition-colors duration-300">Events</a></li>
          <li><a href="#contact" className="font-medium text-text-dark hover:text-primary transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
