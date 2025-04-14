import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "Пожалуйста, введите ваше полное имя" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  attending: z.boolean().default(true),
  plusOne: z.boolean().default(false),
  plusOneName: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const defaultValues: FormValues = {
  fullName: "",
  phone: "",
  attending: true,
  plusOne: false,
  plusOneName: "",
  dietaryRestrictions: "",
};