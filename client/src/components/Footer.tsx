import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Study Tools", url: "/tools" },
    { name: "Pricing", url: "/pricing" },
    { name: "Blog", url: "/blog" },
    { name: "About Us", url: "/about" }
  ];
  
  const resourceLinks = [
    { name: "Help Center", url: "/help" },
    { name: "Community", url: "/community" },
    { name: "Webinars", url: "/webinars" },
    { name: "Careers", url: "/careers" },
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" }
  ];
  
  const socialLinks = [
    { icon: "bi bi-facebook", url: "#" },
    { icon: "bi bi-twitter", url: "#" },
    { icon: "bi bi-instagram", url: "#" },
    { icon: "bi bi-linkedin", url: "#" }
  ];

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=35&h=35&auto=format&fit=crop" 
                alt="OnlineJacademy Logo" 
                className="w-10 h-10 rounded-md bg-white p-1" 
              />
              <span className="text-xl font-bold">Online<span className="text-accent">Jacademy</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering medical education through innovative technology and expert content.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={`Follow us on ${link.icon.split('-')[1]}`}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and study resources.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-accent"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg px-4 py-3 font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} OnlineJacademy. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
