export default function CTASection() {
  return (
    <section className="cta-section py-16 md:py-24 bg-gradient-to-br from-accent to-primary text-white relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-10">
        {/* Particles generated in Home.tsx */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Transform Your Medical Education?
          </h2>
          <p className="text-white/80 text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Join thousands of medical students and professionals who are achieving their goals with OnlineJacademy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="#" 
              className="bg-white text-primary rounded-lg px-8 py-3 font-bold transition-all duration-300 hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
            >
              Get Started Free
            </a>
            <a 
              href="#" 
              className="bg-transparent border-2 border-white text-white rounded-lg px-8 py-3 font-bold transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 w-full sm:w-auto"
            >
              Schedule Demo
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6" data-aos="fade-up" data-aos-delay="300">
            No credit card required. Start with a 7-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
