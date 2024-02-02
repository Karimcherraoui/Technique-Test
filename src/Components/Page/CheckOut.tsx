import FormComponent from "../Form/FormComponent";
import ItemsComponent from "../Item/ItemsComponent";

export default function CheckOut() {
  return (
    <div className="lg:bg-[#F5F5F5]">
      <div className="flex flex-col lg:flex-row w-full shadow">
        <div className="w-full lg:w-1/2 mt-8 lg:mt-36 lg:px-24">
          <ItemsComponent />
        </div>

        <div className="w-full lg:w-1/2 bg-white py-8 lg:py-24 shadow-lg">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}
