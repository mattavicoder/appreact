import React from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  label: string;
  name: string;
  type?: "text" | "textarea" | "number";
};

const InputHookControl: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=''>
      <label htmlFor={name} className='block  mb-3'>
        {label}
      </label>
      <input
        type={type}
        placeholder=' '
        className='block w-full rounded-md appearance-none focus:border-current focus:ring-0 py-2 px-4  text-gray-900 border border-gray-600 focus:shadow-none'
        {...register(name, {valueAsNumber: type == "number"})}
      />
      {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as unknown as string}
        </span>
      )}
    </div>
  );
};

export default InputHookControl;