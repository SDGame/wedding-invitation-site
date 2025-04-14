import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import { formSchema, FormValues, defaultValues } from "./schema";
import { InputField, CheckboxField } from "./FormComponents";
import AttendeeFields from "./AttendeeFields";
import SubmitButton from "./SubmitButton";
import RSVPHeader from "./RSVPHeader";
import { FadeIn } from "../AnimationUtils";

const RSVPForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { watch, control } = form;
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
        className: "bg-wedding-primary/20 border-wedding-accent/30",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <section className="py-12 px-4" id="rsvp">
      <div className="max-w-md mx-auto">
        <RSVPHeader />

        <FadeIn delay={200}>
          <Card className="border-wedding-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-wedding-text">RSVP</CardTitle>
              <CardDescription className="text-center">
                Ваш ответ очень важен для нас при планировании нашего особенного дня
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <InputField
                    control={control}
                    name="fullName"
                    label="ФИО"
                    placeholder="Введите ваши ФИО"
                  />
                  
                  <InputField
                    control={control}
                    name="phone"
                    label="Номер телефона"
                    placeholder="+7 (999) 123-45-67"
                  />
                  
                  <CheckboxField
                    control={control}
                    name="attending"
                    label="Я с радостью приду на свадьбу"
                  />
                  
                  {attending && <AttendeeFields control={control} plusOne={plusOne} />}
                  
                  <SubmitButton isSubmitting={isSubmitting} attending={attending} />
                </form>
              </Form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default RSVPForm;