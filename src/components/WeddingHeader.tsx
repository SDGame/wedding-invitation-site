import { Heart } from "lucide-react";

const WeddingHeader = () => {
  return (
    <header className="py-10 text-center">
      <div className="mb-3 animate-float">
        <Heart className="inline-block text-wedding-accent" size={32} strokeWidth={1.5} fill="#FDF7FF" />
      </div>
      <h1 className="font-cursive text-5xl md:text-7xl tracking-wide text-wedding-accent mb-3">
        Данил & Ксения
      </h1>
      <div className="divider mx-auto w-3/4 max-w-md mb-4"></div>
      <p className="font-elegant text-xl italic mb-4">
        С радостью приглашаем вас на нашу свадьбу
      </p>
      <p className="text-2xl font-semibold text-wedding-text mb-2">
        20 Августа 2024
      </p>
      <p className="text-xl text-wedding-text">
        Грушевский лес, ресторан "Усадьба"
      </p>
    </header>
  );
};

export default WeddingHeader;