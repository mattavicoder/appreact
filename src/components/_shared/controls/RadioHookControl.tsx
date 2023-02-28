import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IReactRadio } from "~/types_interfaces/helper";

type FormInputProps = {
    name: string;
    value: string;
    label: string
};

const RadioHookControl: React.FC<FormInputProps> = ({
    value,
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
                type="radio"
                className='w-4 h-4 text-black-600 bg-gray-700 border-gray-800 rounded   '
                {...register(name)}
                value={value}
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

export default RadioHookControl;