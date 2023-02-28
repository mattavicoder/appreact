import React from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  label: string;
  name: string;
};

const CheckboxHookControl: React.FC<FormInputProps> = ({
  label,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=''>
      <input
        type="checkbox"
        placeholder=' '
        className='w-4 h-4 text-black-600 bg-gray-700 border-gray-800 rounded   '
        {...register(name)}
      />
        <label htmlFor={name} className='ml-3'>
        {label}
      </label>
      {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as unknown as string}
        </span>
      )}
    </div>
  );
};

export default CheckboxHookControl;