import React, { useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from "react-select";
import { IReactSelect } from "~/types_interfaces/helper";

interface IFormInputProps {
  label: string;
  name: string;
  options: IReactSelect[]
};

const SelectHookControl: React.FC<IFormInputProps> = ({
  label,
  name,
  options
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
      {/* isDisabled={watch(`ToDoItems.${index}.Completed`)} */}
      <Controller
                              control={control}
                              name={name}
                              render={({ field }) => {
                                return (
                                  <Select options={options} menuPlacement="top"
                                  instanceId={useId()}
                                    onChange={(val) => field.onChange(val?.value)}
                                    value={options.filter((c) =>
                                      field.value?.includes(c.value)
                                    )}
                                    styles={{
                                        control: (base, state) => ({
                                            ...base,
                                            border: '1px solid black',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                border: '1px solid black',
                                            },
                                            '&:focus': {
                                                border: '2px solid black',
                                            }
                                        })
                                      }}
                                  />
                                );
                              }}
                            />
      {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as unknown as string}
        </span>
      )}
    </div>
  );
};

export default SelectHookControl;