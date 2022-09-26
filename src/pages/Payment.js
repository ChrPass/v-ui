import Buttons from "../Components/StepsButtons";
import PaymentBox from "../Components/Payment/PaymentBox"

const Payment = () => {
  return (
    <>
      <div className="flex flex-row w-full h-full p-10 justify-center">
        <div className="bg-white w-1/2 px-2 py-3 rounded-md">
          <PaymentBox/>
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default Payment;
