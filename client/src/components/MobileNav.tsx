import { useState } from "react";
import { Link } from "wouter";
import { useTheme } from "./ThemeToggle";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=30&h=30&auto=format&fit=crop" 
              alt="OnlineJacademy Logo" 
              className="w-8 h-8 rounded-md" 
            />
            <span className="text-lg font-bold text-foreground">Online<span className="text-accent">Jacademy</span></span>
          </Link>
          
          {/* Menu Button */}
          <button 
            id="mobile-menu-button" 
            className="w-10 h-10 flex items-center justify-center text-foreground"
            onClick={toggleMenu}
          >
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-card shadow-2xl transform transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-5 border-b border-border">
            <span className="font-bold text-lg">Menu</span>
            <button 
              id="close-menu-button" 
              className="w-8 h-8 flex items-center justify-center text-foreground"
              onClick={toggleMenu}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5">
            <div className="mobile-menu-content flex flex-col gap-4">
              <Link href="/" className="mobile-menu-item">Home</Link>
              <Link href="/courses" className="mobile-menu-item">Courses</Link>
              <Link href="/resources" className="mobile-menu-item">Resources</Link>
              <Link href="/about" className="mobile-menu-item">About</Link>
              <Link href="/contact" className="mobile-menu-item">Contact</Link>
            </div>
          </div>
          
          <div className="p-5 border-t border-border">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Dark Mode</span>
                <button 
                  id="theme-toggle-mobile" 
                  onClick={toggleTheme}
                  className={`w-12 h-6 ${theme === 'dark' ? 'bg-accent/30' : 'bg-gray-200'} rounded-full flex items-center relative`}
                >
                  <div 
                    className={`toggle-circle absolute w-5 h-5 bg-white rounded-full transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}`}
                  ></div>
                </button>
              </div>
              <Link 
                href="/login" 
                className="w-full text-center bg-transparent border-2 border-accent text-accent rounded-lg px-4 py-2 font-medium transition-all duration-300 hover:bg-accent hover:text-white mt-2"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="w-full text-center bg-gradient-to-br from-accent to-primary border-none text-white rounded-lg px-5 py-2.5 font-medium transition-all duration-300 hover:shadow-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
