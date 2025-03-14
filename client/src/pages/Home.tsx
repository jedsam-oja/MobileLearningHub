import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import StudyTools from "@/components/StudyTools";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create background particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      const numberOfParticles = 30;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 50 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random animation delay
        const delay = Math.random() * 25;
        particle.style.animationDelay = `${delay}s`;
        
        // Random opacity
        const opacity = Math.random() * 0.3 + 0.1;
        particle.style.opacity = opacity.toString();
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Cleanup
    return () => {
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Background Animation */}
      <div className="background-animation">
        <div id="particles" className="w-full h-full"></div>
      </div>
      
      {/* Navigation */}
      <Navbar />
      <MobileNav />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <StudyTools />
        <FeaturedCourses />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      
      <Footer />
      <BackToTopButton />
    </>
  );
}
