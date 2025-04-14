import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormValues } from "./schema";

interface InputFieldProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label: string;
  placeholder: string;
}

export const InputField = ({ control, name, label, placeholder }: InputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              placeholder={placeholder} 
              {...field} 
              className="focus:border-wedding-accent/80 transition-colors duration-300" 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface CheckboxFieldProps {
  control: Control<FormValues>;
  name: keyof FormValues & string;
  label: string;
}

export const CheckboxField = ({ control, name, label }: CheckboxFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-wedding-accent data-[state=checked]:border-wedding-accent"
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-sm font-medium">
              {label}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};