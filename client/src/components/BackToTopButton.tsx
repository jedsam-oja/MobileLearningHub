import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button 
      id="back-to-top" 
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
