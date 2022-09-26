import Buttons from "../Components/StepsButtons";

const Payment = () => {
  return (
    <>
      <div className="flex flex-row w-full h-full p-10 justify-center">
        <div className="bg-white w-1/2 px-2 py-3 rounded-md">
          <h2 className="text-3xl">Payment</h2>
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default Payment;
