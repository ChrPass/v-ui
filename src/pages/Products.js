import List from "../Components/Products/List";
import Buttons from "../Components/StepsButtons";
const Products = () => {
  return (
    <>
      <div className="flex flex-row w-full h-full p-10 justify-center">
        <div className="bg-white w-1/2 px-2 py-3 rounded-md">
          <h2 className="text-3xl">Your Shopping Basket is empty</h2>
          <List />
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default Products;
