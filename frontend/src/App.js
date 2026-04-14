import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!loading && (
        <>
          <Header />
          <main>
            <HeroSection />
            <ProductShowcase />
            <AboutSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
