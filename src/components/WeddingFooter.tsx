import { Heart } from "lucide-react";

const WeddingFooter = () => {
  return (
    <footer className="py-8 text-center bg-wedding-primary/20">
      <div className="container mx-auto px-4">
        <Heart className="inline-block text-wedding-accent mb-3" size={24} fill="#FDF7FF" />
        <p className="font-cursive text-3xl text-wedding-accent mb-3">
          Иван & Елена
        </p>
        <p className="text-sm mb-1">С нетерпением ждем встречи с вами!</p>
        <p className="text-sm text-wedding-text/80">
          По всем вопросам: +7 (999) 123-45-67
        </p>
      </div>
    </footer>
  );
};

export default WeddingFooter;