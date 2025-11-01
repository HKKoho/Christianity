
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransformed(true);
    }, 1500); // Animation starts after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-bg-light to-blue-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-light opacity-50"></div>
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 leading-tight animate-fade-in-down">
          Experience Peace, Joy & Community
        </h1>
        <p className="text-lg md:text-xl text-text-dark mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Welcome to a place where faith grows, hearts connect, and lives are transformed.
        </p>

        <div className="relative w-48 h-48 md:w-52 md:h-52 mx-auto my-8 flex justify-center items-center">
          {/* NOTE: Replace 'https://picsum.photos/200/200?image=1' with your 'fish-bread-pattern.jpg' */}
          <img
            src="https://picsum.photos/200/200?image=1" 
            alt="Christ Symbol Fish and Bread"
            className={`absolute w-full h-full object-contain transition-all duration-1000 ease-in-out ${
              isTransformed ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
            }`}
          />
          {/* NOTE: Replace 'https://picsum.photos/200/200?image=2' with your 'churchsymbol.jpg' */}
          <img
            src="https://picsum.photos/200/200?image=2"
            alt="Church Symbol"
            className={`absolute w-full h-full object-contain transition-all duration-1000 ease-in-out ${
              isTransformed ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-primary text-text-light px-8 py-3 rounded-full font-bold text-lg cursor-pointer shadow-lg hover:shadow-xl hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            Join Us Today
          </button>
          <button className="bg-transparent text-primary border-2 border-primary px-8 py-3 rounded-full font-bold text-lg cursor-pointer shadow-md hover:shadow-lg hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
