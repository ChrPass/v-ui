import { useMemo, useState } from "react";
import { useStateValue } from "../StateProvider";

const voucherCodes = {
  HAPPYBIRTHDAY: 20,
  "50OFF": 50,
  ILIKEAPPLES: 60,
};

const PriceBox = () => {
  const [discountField, setDiscountField] = useState("");
  const [submitDisc, setSubmitDisc] = useState("");
  const [{ cart = [] }] = useStateValue();

  const price = useMemo(() => {
    const price = cart?.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);

    let total;
    if (voucherCodes[submitDisc]) {
      total = price * (voucherCodes[submitDisc] / 100);
    } else {
      total = price;
    }
    return total;
  }, [cart]);

  const totalPrice = useMemo(
    () =>
      voucherCodes[submitDisc]
        ? price - price * (voucherCodes[submitDisc] / 100)
        : price,
    [price, submitDisc]
  );

  const handleDiscChange = (e) => {
    const newVal = e.target.value;
    setDiscountField(newVal.trim());
  };

  const handleDiscSubmit = () => {
    setSubmitDisc(voucherCodes[discountField] ? discountField : "");
    setDiscountField("");
  };

  return (
    <div className="container">
      <div className="mt-5">
        <div className="w-1/2 mx-auto bg-white rounded-md">
          <div className="flex flex-col justify-center items-center">
            <h6 className="text-black font-medium my-4">Order summart</h6>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Price</p>
              <p className="text-black mr-4">{Number(price).toFixed(2) ?? 0} €</p>
            </div>

            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Discount</p>
              <p className="text-indigo-600 mr-4">{`${
                voucherCodes[submitDisc] ? `${voucherCodes[submitDisc]}%` : "%"
              }`}</p>
            </div>
            <div
              className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
            >
              <p className="text-gray-400 ml-4">Total</p>
              <p className="text-indigo-600 mr-4">{Number(totalPrice).toFixed(2) ?? 0} €</p>
            </div>
            <div
              className="
                flex flex-col
                justify-between
                items-center
                px-3
                py-5
                w-full
              "
            >
              <div className="mb-5 flex flex-col min-w-full">
                <label for="code" className="font-medium text-black">
                    voucher code
                </label>
                <input
                  type="text"
                  id="code"
                  value={discountField}
                  onChange={handleDiscChange}
                  className="w-full py-2 border mt-3 border-gray-300 rounded-md"
                />
              </div>
              <button
                onClick={handleDiscSubmit}
                className="w-full bg-indigo-600 text-white px-2 py-2 rounded-md"
              >
                Apply code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
