import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TypeOf } from "zod";
import InputHookControl from "~/components/_shared/controls/InputHookControl";
import DateHookControl from "~/components/_shared/controls/DateHookControl";
import { IReactSelect } from "~/types_interfaces/helper";
import SelectHookControl from "~/components/_shared/controls/SelectHookControl";
import CheckboxHookControl from "~/components/_shared/controls/CheckboxHookControl";
import RadioHookControl from "~/components/_shared/controls/RadioHookControl";
import { useEffect } from "react";


const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    age: z.number(),
    dob: z.date(),
    gender: z.string(),
    checkbox1: z.boolean(),
    checkbox2: z.boolean(),
    communicationType: z.string(),
    address: z.string()
  });


  type InputSchema = z.infer<typeof schema>;



  const Sample = () => {
    
    const genderOptions: IReactSelect[] = [
      {label: "Male", value: "Male"},
      {label: "Female", value: "Female"},
      {label: "Others", value: "Others"},
    ];


    const methods = useForm<InputSchema>({
      resolver: zodResolver(schema),
      
    });
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = methods;

    useEffect(() => {
      
      var entity: InputSchema = {
        name: "John Doe",
        age: 29,
        dob: new Date(2023, 5, 24),
        gender: "Male",
        checkbox1: true,
        checkbox2: false,
        communicationType: "SMS",
        address: ""
      }

      reset(entity);

  }, []);


    return (
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit((d) => console.log(d))} className="p-4">
        <div className="grid grid-cols-2 gap-4 w-3/4">
          <div>
              <InputHookControl name="name" type="text" label={"Name"} />
          </div>
      
          <div>
          <InputHookControl name="age" type="number" label={"Age"} />

          </div>
          <div>
            <DateHookControl name="dob" label="Date Of Birth" />
          </div>
          <div className="">
            <SelectHookControl label={"Gender"} name={"gender"} options={genderOptions} />
          </div>
          <div>
            <CheckboxHookControl label={"Checkbox 1"} name={"checkbox1"} />
          </div>
          <div>
            <CheckboxHookControl label={"Checkbox 2"} name={"checkbox2"} />
          </div>
          <div>
            <RadioHookControl name={"communicationType"} value={"Email"} label={"Email"} />
            <RadioHookControl name={"communicationType"} value={"WhatsApp"} label={"WhatsApp"} />
            <RadioHookControl name={"communicationType"} value={"SMS"} label={"SMS"} />
          </div>
          <div>
              <InputHookControl name="address" type="textarea" label={"Address"} />
          </div>

        </div>
        <div className="mt-3">
               <input type="submit"  className="btn-primary-custom"/>    
          </div>
        
      </form>
      </FormProvider>
    );
}


export default Sample;