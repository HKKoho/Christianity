
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-bg-light text-text-dark font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        {/* Other sections (About, Services, Events, etc.) can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
