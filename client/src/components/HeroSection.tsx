export default function HeroSection() {
  return (
    <section className="hero-section relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="hero-content w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent" data-aos="fade-up">
              Master Medicine with Confidence
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg" data-aos="fade-up" data-aos-delay="100">
              Revolutionize your medical education with our comprehensive study platform. Personalized learning paths, expert content, and adaptive assessment tools.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-cta flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="bg-gradient-to-br from-accent to-primary border-none text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                Start Learning
              </a>
              <a href="#" className="bg-transparent border-2 border-accent text-accent rounded-lg px-5 py-2.5 font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:-translate-y-0.5">
                Take a Tour
              </a>
            </div>
            
            {/* Hero Stats */}
            <div className="hero-stats grid grid-cols-3 gap-4 mt-8" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-item">
                <span className="stat-number text-2xl md:text-3xl font-bold text-accent">15K+</span>
                <span className="stat-label text-sm text-muted-foreground">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-2xl md:text-3xl font-bold text-accent">500+</span>
                <span className="stat-label text-sm text-muted-foreground">Courses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-2xl md:text-3xl font-bold text-accent">95%</span>
                <span className="stat-label text-sm text-muted-foreground">Success Rate</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hero-image w-full md:w-1/2 relative" data-aos="fade-left">
            <img 
              className="w-full rounded-xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Medical students studying together" 
            />
            
            {/* Floating Badges */}
            <div className="hero-badge badge-1 absolute hidden md:flex top-[20%] -left-[10%] bg-card rounded-xl p-3 shadow-md items-center gap-3" style={{animationDelay: "0s"}}>
              <div className="badge-icon badge-questions w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                <i className="bi bi-question-circle"></i>
              </div>
              <div>
                <div className="font-bold">12,500+</div>
                <div className="text-xs text-muted-foreground">Practice Questions</div>
              </div>
            </div>
            
            <div className="hero-badge badge-2 absolute hidden md:flex bottom-[20%] -right-[5%] bg-card rounded-xl p-3 shadow-md items-center gap-3" style={{animationDelay: "0.5s"}}>
              <div className="badge-icon badge-videos w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                <i className="bi bi-play-circle"></i>
              </div>
              <div>
                <div className="font-bold">2,300+</div>
                <div className="text-xs text-muted-foreground">Video Lessons</div>
              </div>
            </div>
            
            <div className="hero-badge badge-3 absolute hidden md:flex -bottom-[5%] left-[20%] bg-card rounded-xl p-3 shadow-md items-center gap-3" style={{animationDelay: "1s"}}>
              <div className="badge-icon badge-flashcards w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                <i className="bi bi-layers"></i>
              </div>
              <div>
                <div className="font-bold">8,000+</div>
                <div className="text-xs text-muted-foreground">Flashcards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
