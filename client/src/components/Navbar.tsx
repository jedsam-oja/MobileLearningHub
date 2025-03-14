import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <nav 
      className={`hidden md:block fixed w-full ${isScrolled ? 'bg-background/80' : 'bg-background/0'} backdrop-blur-md transition-all duration-300 shadow-md z-50`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=35&h=35&auto=format&fit=crop" 
              alt="OnlineJacademy Logo" 
              className="w-9 h-9 rounded-md transition-transform duration-300 hover:rotate-[10deg]" 
            />
            <span className="text-xl font-bold text-foreground">Online<span className="text-accent">Jacademy</span></span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="nav-link active">Home</Link>
            <Link href="/courses" className="nav-link">Courses</Link>
            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
              id="theme-toggle-desktop" 
              className="w-9 h-9 rounded-full flex items-center justify-center bg-card text-muted-foreground border border-border cursor-pointer transition-all duration-300 hover:bg-accent hover:text-white"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>
            
            {/* Auth Button */}
            <Link 
              href="/auth" 
              className="bg-gradient-to-br from-accent to-primary border-none text-white rounded-lg px-5 py-2.5 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
