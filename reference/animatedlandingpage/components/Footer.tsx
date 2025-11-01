
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark text-text-light text-center py-6">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Our Christian Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
