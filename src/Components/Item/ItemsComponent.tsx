import img from "../../assets/img_avatar.png";
import Data from "../../data/data.json";

interface Product {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  items: Product[];
  totalPrice: number;
}

interface OrderDetails {
  order: Order;
}

export default function ItemsComponent() {
  const order: OrderDetails = Data;

  return (
    <div className="flex   justify-center align-top ">
      <div className="flex flex-col gap-10 w-[80%]">
        <div className="flex flex-col ">
          <text className="text-gray-400 text-xl">Total Price</text>
          <text className="font-bold text-[40px] mb">
            $ {order.order.totalPrice}
          </text>
        </div>
        {order.order.items.map((item) => (
          <div
            className="flex flex-row w-full items-center	"
            key={item.productId}
          >
            <div className="flex flex-row w-full gap-5">
              <img className="w-[40px] h-[40px] rounded-md" src={img} alt="" />
              <div className="flex flex-col">
                <text>{item.name}</text>
                <select className="bg-gray-200 border rounded-md w-fit text-xs ">
                  <option>Qty {item.quantity}</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-[30%]">
              {item.quantity > 1 && (
                <>
                  <text className="text-right">
                    ${item.price * item.quantity}
                  </text>
                  <text className="text-gray-400 font-light text-right">
                    ${item.price} each
                  </text>
                </>
              )}
              {item.quantity === 1 && (
                <>
                  <text className="text-right">${item.price}</text>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
