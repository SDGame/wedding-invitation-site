import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const WeddingHeader = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
    
    // Добавляем обработчик прокрутки для анимаций
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    // Вызовем один раз для элементов, которые уже видны при загрузке
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="py-10 text-center">
      <div className={`mb-3 animate-rotate-heart transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <Heart 
          className="inline-block text-wedding-accent hover:text-wedding-gold transition-colors duration-300" 
          size={32} 
          strokeWidth={1.5} 
          fill="#FDF7FF" 
        />
      </div>
      <h1 className={`font-cursive text-5xl md:text-7xl tracking-wide text-wedding-accent mb-3 transition-all duration-700 ${visible ? 'animate-slide-down' : 'opacity-0 -translate-y-10'}`}>
        Данил & Ксения
      </h1>
      <div className="divider mx-auto w-3/4 max-w-md mb-4 transition-all duration-500 hover:bg-wedding-gold/50"></div>
      <p className={`font-elegant text-xl italic mb-4 transition-all duration-700 delay-300 ${visible ? 'animate-fade-in' : 'opacity-0'}`}>
        С радостью приглашаем вас на нашу свадьбу
      </p>
      <p className={`text-2xl font-semibold text-wedding-text mb-2 transition-all duration-700 delay-500 ${visible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
        20 Августа 2024
      </p>
      <p className={`text-xl text-wedding-text animate-pulse-soft transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Грушевский лес, ресторан "Усадьба"
      </p>
      <div className="wavy-line w-1/2 max-w-md mt-8"></div>
    </header>
  );
};

export default WeddingHeader;