interface InputProps {
  cardInput: React.InputHTMLAttributes<HTMLInputElement>;
  expInput: React.InputHTMLAttributes<HTMLInputElement>;
  cvvInput: React.InputHTMLAttributes<HTMLInputElement>;
}
export default function InputCard({ cardInput ,expInput,cvvInput }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="flex flex-start mb-1 text-gray-600">
        Card information
      </label>
      <div>
        <input
          className=" border rounded-t-md p-2 w-full   font-light"
          type="text"
          id="card"
          {...cardInput}
        />
        <div className="flex flex-row ">
          <input
            className=" border shadow border-t-0 rounded-bl-md  p-2 w-full   font-light"
            type="text"
            id="date"
            {...expInput}
          />
          <input
            className=" border shadow border-t-0 rounded-br-md p-2 w-full   font-light"
            type="text"
            id="cvv"
            {...cvvInput}
          />
        </div>
      </div>
    </div>
  );
}
