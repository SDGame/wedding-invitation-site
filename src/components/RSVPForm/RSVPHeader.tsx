import { Heart } from "lucide-react";
import { FadeIn } from "../AnimationUtils";

const RSVPHeader = () => {
  return (
    <FadeIn direction="up">
      <div className="text-center mb-8">
        <Heart 
          className="inline-block text-wedding-accent mb-2 animate-rotate-heart" 
          size={32} 
          fill="#FDF7FF" 
        />
        <h2 className="font-cursive text-4xl md:text-5xl tracking-wide text-wedding-accent mb-3">
          Подтвердите участие
        </h2>
        <p className="text-wedding-text">
          Пожалуйста, заполните форму до 1 августа 2024 года
        </p>
      </div>
    </FadeIn>
  );
};

export default RSVPHeader;