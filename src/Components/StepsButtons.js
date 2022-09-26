import { useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Components/StateProvider";

const steps = ["/products", "/checkout", "/payment"];

const StepsButtons = () => {
  const [{ cart = [], validStatus }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stepIndex = useMemo(() => {
    const activePathString = window.location.pathname ?? "";
    const foundIndex = steps.findIndex((item) => item === activePathString);

    return foundIndex >= 0 ? foundIndex : 0;
  }, []);

  const handleNextPage = useCallback(() => {
    navigate(steps[stepIndex + 1]);
  }, [stepIndex]);

  const handleSubmit = useCallback(() => {
    alert("SUBMIT");
  }, []);

  const handlePrevPage = useCallback(() => {
    navigate(steps[stepIndex - 1]);
  }, [stepIndex]);

  useEffect(() => {
    let valStat = true;
    if (steps[stepIndex] === "/checkout" && !cart?.length) {
      valStat = false;
    }

    dispatch({
      type: "SET_PAYMENT_FORM__VALID_STATUS",
      validStatus: valStat,
    });
  }, [cart, stepIndex]);

  return (
    <div className="flex flex-row w-full h-full justify-center">
      <div className="w-1/2 px-2 py-3 rounded-md flex items-center justify-between h-16">
        <div>
          {stepIndex !== 0 && (
            <button
              onClick={handlePrevPage}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            >
              Back
            </button>
          )}
        </div>
        <div>
          {stepIndex !== steps.length - 1 && (
            <button
              disabled={!validStatus}
              onClick={handleNextPage}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsButtons;
