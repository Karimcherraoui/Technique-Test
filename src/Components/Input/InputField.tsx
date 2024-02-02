import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegisterReturn<any>;
}

export default function InputField({
  id,
  register,
  label,
  ...inputProps
}: InputProps) {
  return (
    <div className="flex flex-col my-4 w-full">
      <label htmlFor={id} className="flex flex-start mb-1 text-gray-600">
        {label}
      </label>
      <input
        id={id}
        className="border rounded-md p-2 shadow   font-light "
        {...inputProps}
        {...register}
      />
    </div>
  );
}
