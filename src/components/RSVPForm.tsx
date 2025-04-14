import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, PartyPopper, UserCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Пожалуйста, введите ваше полное имя" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  attending: z.boolean().default(true),
  plusOne: z.boolean().default(false),
  plusOneName: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RSVPForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      attending: true,
      plusOne: false,
      plusOneName: "",
      dietaryRestrictions: "",
    },
  });

  const { watch } = form;
  const attending = watch("attending");
  const plusOne = watch("plusOne");

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Имитация отправки данных
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      
      toast({
        title: "Спасибо за ваш ответ!",
        description: values.attending 
          ? "Мы будем рады видеть вас на нашей свадьбе!" 
          : "Жаль, что вы не сможете присутствовать. Спасибо, что сообщили.",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <section className="py-12 px-4" id="rsvp">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Heart className="inline-block text-wedding-accent mb-2" size={32} fill="#FDF7FF" />
          <h2 className="font-cursive text-4xl md:text-5xl tracking-wide text-wedding-accent mb-3">
            Подтвердите участие
          </h2>
          <p className="text-wedding-text">
            Пожалуйста, заполните форму до 1 августа 2024 года
          </p>
        </div>

        <Card className="border-wedding-primary/30 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-wedding-text">RSVP</CardTitle>
            <CardDescription className="text-center">
              Ваш ответ очень важен для нас при планировании нашего особенного дня
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ФИО</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите ваши ФИО" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Номер телефона</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (999) 123-45-67" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="attending"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Я с радостью приду на свадьбу
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                {attending && (
                  <>
                    <FormField
                      control={form.control}
                      name="plusOne"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Я буду с сопровождающим
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    {plusOne && (
                      <FormField
                        control={form.control}
                        name="plusOneName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Имя сопровождающего</FormLabel>
                            <FormControl>
                              <Input placeholder="Введите имя" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="dietaryRestrictions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Диетические ограничения (при наличии)</FormLabel>
                          <FormControl>
                            <Input placeholder="Например, вегетарианец, аллергия на орехи и т.д." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-wedding-accent hover:bg-wedding-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : attending ? (
                    <><UserCheck className="mr-2 h-4 w-4" /> Подтвердить участие</>
                  ) : (
                    <><PartyPopper className="mr-2 h-4 w-4" /> Отправить ответ</>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVPForm;