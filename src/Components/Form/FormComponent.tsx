/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import InputCard from "../Input/InputCard";
import InputCountry from "../Input/InputCountry";
import InputField from "../Input/InputField";
import Data from "../../data/data.json";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Customer {
  name: string;
  email: string;
  address: string;
  zipCode: string;
}

interface PaymentMethod {
  type: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}
interface OrderDetails {
  customer: Customer;
  paymentMethod: PaymentMethod;
}

export default function FormComponent() {
  const formData: OrderDetails = Data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({

    // commented for testing with cypress
  
    // defaultValues: {
    //   email: formData.customer.email,
    //   cardNumber: formData.paymentMethod.cardNumber,
    //   expirationDate: formData.paymentMethod.expirationDate,
    //   cvv: formData.paymentMethod.cvv,
    //   name: formData.customer.name,
    //   zip: formData.customer.zipCode,
    //   country: "",
    // },
  });
  const getCountryFromAddress = (address: string): string => {
    const parts = address.split(",");
    const country = parts[parts.length - 1].trim();
    return country;
  };

  const { isPending, isError, mutate } = useMutation({
    mutationFn: (formData: OrderDetails) => {
      fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Payment successful");
        }, 2000);
      });
    },
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const country = getCountryFromAddress(formData.customer.address);
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);

    mutate(formData);
    toast.success("Payment successful");
  };
  const onError: SubmitErrorHandler<any> = (errors: any) => {
    toast.error("check your inputs");
  };

  return (
    <div className="flex flex-col justify-center items-center  ">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="w-[100%] h-[50%]">
          <button className="bg-black w-full rounded-md p-2">
            <span className="text-white text-lg">Pay</span>{" "}
          </button>
          <hr className="mb-4 mt-10 w-full" />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder=""
            register={register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <InputCard
            cardInput={register("cardNumber", { required: true })}
            expInput={register("expirationDate", { required: true })}
            cvvInput={register("cvv" , { required: true })}
          />
          <InputField
            id="name"
            label="Cardholder name"
            type="text"
            placeholder="Full name on card"
            register={register("name", { required: true })}
          />
          <InputCountry
            zipInput={register("zip", { required: true })}
            countrySelect={register("country", { required: true })}
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-900 w-full rounded-md p-2 disabled:bg-slate-600"
          >
            {isPending ? (
              <span className="text-gray-400">lodading...</span>
            ) : (
              <span className="text-gray-400">Pay</span>
            )}
          </button>
        </div>
      </form>

    </div>
  );
}
