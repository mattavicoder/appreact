import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Flatpickr from "react-flatpickr";

type FormInputProps = {
  label: string;
  name: string;
};

const DateHookControl: React.FC<FormInputProps> = ({
  label,
  name
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=''>
      <label htmlFor={name} className='block  mb-3'>
        {label}
      </label>
    
      <Controller
                            name={name}
                            control={control}
                                                 
                            render={({ field }) => (
                                <Flatpickr
                                    value={field.value}
                                    ref={field.ref}
                                    className="block w-full rounded-md appearance-none focus:border-current focus:ring-0 py-2 px-4 focus:shadow-none  text-gray-900 border border-gray-600 "
                                    onChange={(event) => {
                                      field.onChange(event[0]);
                                    }} />
                            )}
                        />
      {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as unknown as string}
        </span>
      )}
    </div>
  );
};

export default DateHookControl;