import { MapPin, Clock, Gift, Music, Utensils, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FadeIn, WavyLine } from "./AnimationUtils";

const WeddingDetails = () => {
  return (
    <section className="py-16 px-4">
      <FadeIn>
        <h2 className="text-4xl font-cursive text-wedding-accent text-center mb-2">
          Детали мероприятия
        </h2>
        <WavyLine className="mb-10" width="w-1/3" />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FadeIn delay={200}>
          <Card className="border-wedding-primary/30 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-wedding-accent/10 flex items-center justify-center mx-auto mb-2">
                <Clock className="text-wedding-accent animate-pulse-soft" size={24} />
              </div>
              <CardTitle className="text-center font-elegant">Расписание</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-semibold">13:00 - 14:00</p>
              <p className="text-sm text-gray-600">Сбор гостей</p>
              <p className="font-semibold">14:00 - 15:00</p>
              <p className="text-sm text-gray-600">Церемония</p>
              <p className="font-semibold">15:00 - 22:00</p>
              <p className="text-sm text-gray-600">Праздничный ужин</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={400}>
          <Card className="border-wedding-primary/30 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-wedding-accent/10 flex items-center justify-center mx-auto mb-2">
                <MapPin className="text-wedding-accent animate-pulse-soft" size={24} />
              </div>
              <CardTitle className="text-center font-elegant">Место проведения</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold mb-2">Ресторан "Усадьба"</p>
              <p className="text-sm text-gray-600 mb-4">
                г. Москва, Грушевский лес, ул. Цветочная, 123
              </p>
              <div className="rounded-md overflow-hidden border border-wedding-primary/20 h-40 bg-gray-100 hover:opacity-90 transition-opacity">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-sm text-gray-500">Карта места</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={600}>
          <Card className="border-wedding-primary/30 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-wedding-accent/10 flex items-center justify-center mx-auto mb-2">
                <Gift className="text-wedding-accent animate-pulse-soft" size={24} />
              </div>
              <CardTitle className="text-center font-elegant">Пожелания</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                Просим вас воздержаться от живых цветов.
              </p>
              <p className="text-sm text-gray-600">
                Самый ценный подарок для нас — ваше присутствие и хорошее настроение!
              </p>
              <p className="text-sm text-gray-600">
                Дресс-код: элегантный наряд в пастельных тонах
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn direction="right" delay={300} className="col-span-1 md:col-span-3">
          <h3 className="text-3xl font-cursive text-wedding-accent text-center mb-8">
            Наша свадьба будет особенной
          </h3>
        </FadeIn>

        <FadeIn direction="up" delay={400}>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-4">
              <Utensils className="text-wedding-gold animate-pulse-soft" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Изысканное меню</h4>
            <p className="text-sm text-gray-600">
              Специально разработанное меню от шеф-повара с учётом предпочтений гостей
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={600}>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-4">
              <Music className="text-wedding-gold animate-pulse-soft" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Живая музыка</h4>
            <p className="text-sm text-gray-600">
              Выступление струнного квартета во время церемонии и джаз-бенда на банкете
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={800}>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-4">
              <Camera className="text-wedding-gold animate-pulse-soft" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Фотозона</h4>
            <p className="text-sm text-gray-600">
              Профессиональная фотозона с реквизитом и моментальными снимками на память
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WeddingDetails;