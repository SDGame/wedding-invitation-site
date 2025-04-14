import { Heart, Phone, Mail, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const WeddingFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const footer = document.getElementById('wedding-footer');
    if (footer) {
      observer.observe(footer);
    }
    
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer id="wedding-footer" className="py-8 text-center bg-wedding-primary/20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-wedding-gold animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-wedding-gold/70 animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-2 h-2 rounded-full bg-wedding-gold/50 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-5 right-20 w-1 h-1 rounded-full bg-wedding-gold/80 animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Heart 
            className="inline-block text-wedding-accent mb-3 animate-rotate-heart cursor-pointer hover:scale-125 transition-transform duration-300" 
            size={24} 
            fill="#FDF7FF" 
          />
        </div>
        
        <p className={`font-cursive text-3xl text-wedding-accent mb-3 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          Данил & Ксения
        </p>
        
        <div className="wavy-line w-1/3 max-w-xs mx-auto mb-4"></div>
        
        <p className={`text-sm mb-3 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          С нетерпением ждем встречи с вами!
        </p>
        
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-3 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-5'}`}>
          <div className="flex items-center gap-2 hover:text-wedding-accent transition-colors duration-300">
            <Phone size={16} className="text-wedding-gold" />
            <p className="text-sm">+7 (999) 123-45-67</p>
          </div>
          
          <div className="flex items-center gap-2 hover:text-wedding-accent transition-colors duration-300">
            <Mail size={16} className="text-wedding-gold" />
            <p className="text-sm">danil.ksenia@wedding.ru</p>
          </div>
          
          <div className="flex items-center gap-2 hover:text-wedding-accent transition-colors duration-300">
            <Calendar size={16} className="text-wedding-gold" />
            <p className="text-sm">20 Августа 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;