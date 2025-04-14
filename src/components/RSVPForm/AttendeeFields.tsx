import { FC } from "react";
import { Control } from "react-hook-form";
import { FormValues } from "./schema";
import { CheckboxField, InputField } from "./FormComponents";

interface AttendeeFieldsProps {
  control: Control<FormValues>;
  plusOne: boolean;
}

export const AttendeeFields: FC<AttendeeFieldsProps> = ({ control, plusOne }) => {
  return (
    <>
      <CheckboxField
        control={control}
        name="plusOne"
        label="Я буду с сопровождающим"
      />
      
      {plusOne && (
        <InputField
          control={control}
          name="plusOneName"
          label="Имя сопровождающего"
          placeholder="Введите имя"
        />
      )}
      
      <InputField
        control={control}
        name="dietaryRestrictions"
        label="Диетические ограничения (при наличии)"
        placeholder="Например, вегетарианец, аллергия на орехи и т.д."
      />
    </>
  );
};

export default AttendeeFields;