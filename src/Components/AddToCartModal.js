import { useState } from "react";
import Modal from "./Modal";
import CustomButton from "./PriceButtons";
import {useStateValue} from "./StateProvider";

const Section = ({ label, itemValue }) => {
  return (
    <>
      <label
        for="name"
        class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
      >
        {label}
      </label>
      <input
        id="name"
        readOnly
        class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        value={itemValue}
      />
    </>
  );
};

const AddToCartModal = ({ open = false, onClose = () => {}, item = {} }) => {
  const [quantity, setQuantity] = useState(parseInt(item.quantity, 10) ?? 0);
  const [{cart},dispatch, ] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity
      },
    });
  };

  return (
    <Modal open={open} onCancel={onClose} onSubmit={addToBasket}>
      <div>
        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
          Select Product
        </h1>
        <Section label="Name" itemValue={item.name} />
        <Section label="Price" itemValue={item.price} />
        <CustomButton quantity={quantity} handleQuantityChange={setQuantity} />
      </div>
    </Modal>
  );
};

export default AddToCartModal;
