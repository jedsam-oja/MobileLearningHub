export default function StudyTools() {
  const tools = [
    {
      icon: "bi bi-question-diamond",
      title: "Comprehensive Question Bank",
      description: "Thousands of MCQs covering all medical specialties to test your knowledge and prepare for exams.",
      link: "Explore Questions",
      bgColor: "bg-amber-100 dark:bg-amber-950",
      textColor: "text-amber-600 dark:text-amber-400",
      delay: 100
    },
    {
      icon: "bi bi-play-circle",
      title: "Video Lectures",
      description: "Expert-led video lessons that break down complex medical concepts with clear explanations and visual aids.",
      link: "Watch Videos",
      bgColor: "bg-emerald-100 dark:bg-emerald-950",
      textColor: "text-emerald-600 dark:text-emerald-400",
      delay: 200
    },
    {
      icon: "bi bi-arrow-repeat",
      title: "Spaced Repetition System",
      description: "Scientifically-proven learning technique that optimizes memory retention for long-term knowledge acquisition.",
      link: "Boost Retention",
      bgColor: "bg-indigo-100 dark:bg-indigo-950",
      textColor: "text-indigo-600 dark:text-indigo-400",
      delay: 300
    },
    {
      icon: "bi bi-headphones",
      title: "Educational Podcasts",
      description: "Listen to discussions on medical topics, clinical cases, and career insights from leading professionals.",
      link: "Listen Now",
      bgColor: "bg-red-100 dark:bg-red-950",
      textColor: "text-red-600 dark:text-red-400",
      delay: 400
    },
    {
      icon: "bi bi-people",
      title: "Study Groups",
      description: "Collaborate with peers in virtual study rooms, share resources, and prepare for exams together.",
      link: "Join Groups",
      bgColor: "bg-blue-100 dark:bg-blue-950",
      textColor: "text-blue-600 dark:text-blue-400",
      delay: 500
    },
    {
      icon: "bi bi-journal-text",
      title: "Note-Taking System",
      description: "Create organized notes with our digital platform that links concepts and integrates with other study materials.",
      link: "Take Notes",
      bgColor: "bg-purple-100 dark:bg-purple-950",
      textColor: "text-purple-600 dark:text-purple-400",
      delay: 600
    }
  ];

  return (
    <section className="study-tools-section py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative" data-aos="fade-up">
            Powerful Study Tools
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
            Our platform offers a comprehensive suite of study tools designed to enhance your learning experience and maximize your success in medical education.
          </p>
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="tool-card bg-card rounded-xl p-6 md:p-8 h-full shadow-md transition-all duration-300 hover:-translate-y-2 border border-border" 
              data-aos="fade-up" 
              data-aos-delay={tool.delay}
            >
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl ${tool.bgColor} flex items-center justify-center ${tool.textColor} text-2xl mb-4`}>
                  <i className={tool.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>
              <a href="#" className="text-accent font-medium flex items-center gap-2 mt-auto">
                {tool.link} <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
