export default function FeaturedCourses() {
  const categories = ["All Courses", "Anatomy", "Physiology", "Pathology", "Pharmacology"];
  
  const courses = [
    {
      id: 1,
      title: "Cardiovascular System Masterclass",
      description: "Comprehensive coverage of cardiac physiology, pathology, and clinical correlations with case studies.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Physiology",
      duration: "40+ hours",
      rating: 4.9,
      reviews: 243,
      price: "$89.99",
      badge: "Bestseller",
      delay: 200
    },
    {
      id: 2,
      title: "Clinical Neuroanatomy",
      description: "Deep dive into brain structures, pathways, and lesions with 3D models and clinical case discussions.",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Anatomy",
      duration: "35+ hours",
      rating: 4.8,
      reviews: 189,
      price: "$79.99",
      badge: "",
      delay: 300
    },
    {
      id: 3,
      title: "Pharmacology Made Simple",
      description: "Master drug mechanisms, interactions, and clinical applications with memory aids and visual frameworks.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Pharmacology",
      duration: "30+ hours",
      rating: 4.7,
      reviews: 156,
      price: "$69.99",
      badge: "New",
      delay: 400
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Anatomy":
        return "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400";
      case "Physiology":
        return "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400";
      case "Pathology":
        return "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400";
      case "Pharmacology":
        return "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case "Bestseller":
        return "bg-accent text-white";
      case "New":
        return "bg-red-500 text-white";
      default:
        return "bg-primary text-white";
    }
  };

  return (
    <section className="featured-courses-section py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative" data-aos="fade-up">
            Featured Courses
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
            Explore our most popular courses designed by leading medical professionals and educators to help you excel in your medical career.
          </p>
        </div>
        
        {/* Course Tabs */}
        <div className="course-tabs flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="150">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`px-6 py-2 rounded-full ${index === 0 ? 'bg-accent text-white' : 'bg-background hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground'} font-medium transition-all`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="course-card bg-card rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay={course.delay}
            >
              <div className="relative">
                <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
                {course.badge && (
                  <div className={`absolute top-4 left-4 ${getBadgeColor(course.badge)} text-xs px-3 py-1 rounded-full`}>
                    {course.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs ${getCategoryColor(course.category)} px-3 py-1 rounded-full`}>
                    {course.category}
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400 px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <i className="bi bi-star-fill text-yellow-400"></i>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">({course.reviews})</span>
                  </div>
                  <span className="font-bold text-primary">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <a href="#" className="inline-flex items-center justify-center bg-card border-2 border-accent text-accent rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-accent hover:text-white">
            View All Courses <i className="bi bi-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
