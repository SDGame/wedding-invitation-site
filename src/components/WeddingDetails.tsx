import { Clock, MapPin, Music, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WeddingDetails = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="font-cursive text-4xl md:text-5xl tracking-wide text-wedding-accent text-center mb-8">
        Программа дня
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="border-wedding-primary/30 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <Clock className="text-wedding-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Церемония</h3>
              <p className="text-center">
                Сбор гостей и торжественная церемония бракосочетания на открытом воздухе
              </p>
              <p className="mt-3 font-medium">16:00 - 17:00</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-wedding-primary/30 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <Utensils className="text-wedding-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Банкет</h3>
              <p className="text-center">
                Праздничный ужин, тосты и поздравления в шатре ресторана "Усадьба"
              </p>
              <p className="mt-3 font-medium">17:30 - 21:00</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-wedding-primary/30 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <Music className="text-wedding-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Вечеринка</h3>
              <p className="text-center">
                Танцы и развлекательная программа с профессиональным ведущим
              </p>
              <p className="mt-3 font-medium">21:00 - 00:00</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center mb-2">
          <MapPin className="text-wedding-accent mr-2" size={20} />
          <span className="font-medium">Адрес:</span>
        </div>
        <p>Ресторан "Усадьба", Московская область, Грушевский лес, 15 км от МКАД</p>
      </div>
    </section>
  );
};

export default WeddingDetails;