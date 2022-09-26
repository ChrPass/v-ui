import Buttons from "../Components/StepsButtons";
import List from "../Components/Checkout/List";
import PriceBox from "../Components/Checkout/PriceBox";
import { useStateValue } from "../Components/StateProvider";

const Checkout = () => {
  const [{ cart = [] }] = useStateValue();
  return (
    <>
      <div className="flex flex-row w-full h-full p-10 justify-center">
        <div className="bg-white w-1/2 px-2 py-3 rounded-md">
          {cart?.length ? (
            <List />
          ) : (
            <h2 className="text-3xl">Your Shopping Basket is empty</h2>
          )}
        </div>
        <div className="w-2/12 ml-5 px-2 py-3 rounded-md">
          <div className="bg-white rounded-md">
            <PriceBox/>
          </div>
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default Checkout;
