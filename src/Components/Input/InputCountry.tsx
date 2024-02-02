import React from "react";
const countries = [
  {"name": "United Arab Emirates", "code": "AE"},
  {"name": "United Kingdom", "code": "GB"},
  {"name": "United States", "code": "US"},
  {"name": "United States Minor Outlying Islands", "code": "UM"},
]
interface InputProps {
  zipInput: React.InputHTMLAttributes<HTMLInputElement>;
  countrySelect: React.SelectHTMLAttributes<HTMLSelectElement>;
}
export default function InputCountry({ zipInput,countrySelect }: InputProps) {
  return (
    <div className="flex flex-col my-4 w-full">
      <label className="flex flex-start mb-1 text-gray-600">
        Country or region
      </label>
      <div className="flex flex-col">
        <select id="country" className=" border rounded-t-md p-2 font-light" {...countrySelect}>
          {countries.map((c)=><option value={c.code} key={c.code} >{c.name}</option>)}
        </select>
        <input
          className=" border shadow border-t-0 rounded-b-md p-2 font-light"
          type="text"
          id="zipCode"
          {...zipInput}
        />
      </div>
    </div>
  );
}
