export default function Testimonials() {
  const testimonials = [
    {
      quote: "OnlineJacademy transformed my USMLE preparation. The adaptive question bank identified my weak areas, and the video explanations helped me understand complex concepts quickly. I improved my score by 30 points!",
      name: "Sarah Johnson",
      role: "Medical Student, Johns Hopkins",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      delay: 100
    },
    {
      quote: "As a busy resident, I needed an efficient way to stay updated with medical knowledge. The platform's spaced repetition system and mobile access made it possible to study during short breaks. Highly recommended!",
      name: "Dr. Michael Chen",
      role: "Resident Physician, UCLA Medical Center",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      delay: 200
    },
    {
      quote: "The community feature is what sets this platform apart. Being able to discuss difficult concepts with peers and get explanations from instructors made all the difference in my board preparation.",
      name: "Priya Patel",
      role: "Medical Student, NYU Grossman",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      delay: 300
    }
  ];

  return (
    <section className="testimonials-section py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative" data-aos="fade-up">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
            Hear from medical students and professionals who have transformed their learning experience with our platform.
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="testimonial-slider relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-card p-6 md:p-8 rounded-xl shadow-md relative" 
                data-aos="fade-up" 
                data-aos-delay={testimonial.delay}
              >
                <div className="text-accent text-5xl absolute -top-4 left-6 opacity-20">"</div>
                <div className="mb-6 relative z-10">
                  <p className="text-foreground italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
