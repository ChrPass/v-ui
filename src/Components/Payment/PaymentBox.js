import { useState } from "react";

import {
  CreditCardIcon,
  CalendarIcon,
  InformationCircleIcon,
  WalletIcon,
} from "@heroicons/react/20/solid";

const initalData = {
  cardNumber: "",
  ccv: "",
  expDate: "",
  name: "",
};

const PaymentBox = () => {
  const [form, setForm] = useState({ ...initalData });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const tempErr = {};
    const spaceAndCharReg = /^[A-Za-z ]+$/;
    const threeOrFourDigitsReg = /^[0-9]{3,4}$/;

    if (!form.cardNumber?.trim() || isNaN(form.cardNumber.replace(" ", ""))) {
      tempErr.cardNumber = "Invalid Card Number Format";
    }

    if (!form.name?.trim() || !spaceAndCharReg.test(form.name)) {
      tempErr.name = "Invalid name";
    }

    if (!form.ccv?.trim() || !threeOrFourDigitsReg.test(form.ccv)) {
      tempErr.ccv = "Invalid CVV";
    }

    if (!form.expDate?.trim()) {
      tempErr.expDate = "Invalid Date";
    }

    return tempErr;
  };

  const handleSubmit = () => {
    const errorsRes = validateForm();
    if (!Object.keys(errorsRes).length) {
      setErrors({});
      alert("Success");
    } else {
      setErrors(errorsRes);
    }
  };

  const handleChangeField = (e) => {
    const newValue = e.target.value;
    const name = e.target.id;

    setForm({ ...form, [name]: newValue });
  };

  return (
    <>
      <div className="relative py-8 px-5 md:px-10 bg-white rounded">
        <div className="w-full flex justify-start text-gray-600 mb-3">
          <WalletIcon className="h-12 w-12" />
        </div>
        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
          Card Details
        </h1>
        <label
          for="name"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Name
        </label>
        <input
          onChange={handleChangeField}
          id="name"
          value={form.name}
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder="Name"
        />
        {errors?.name && (
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors?.name}
          </p>
        )}
        <label
          for="cardNumber"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Card Number
        </label>
        <div className="relative mb-5 mt-2">
          <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
            <CreditCardIcon className="h-6 w-6" />
          </div>
          <input
            onChange={handleChangeField}
            id="cardNumber"
            value={form.cardNumber}
            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
            placeholder="XXXX - XXXX - XXXX - XXXX"
          />
        </div>
        {errors?.cardNumber && (
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors?.cardNumber}
          </p>
        )}
        <label
          for="expDate"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Expiry Date
        </label>
        <div className="relative mb-5 mt-2">
          <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <input
            onChange={handleChangeField}
            id="expDate"
            value={form.expDate}
            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="MM/YY"
          />
        </div>
        {errors?.expDate && (
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors?.expDate}
          </p>
        )}
        <label
          for="ccv"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          CVC
        </label>
        <div className="relative mb-5 mt-2">
          <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
            <InformationCircleIcon className="h-6 w-6" />
          </div>
          <input
            onChange={handleChangeField}
            value={form.ccv}
            id="ccv"
            className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="MM/YY"
          />
        </div>
        {errors?.ccv && (
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors?.ccv}
          </p>
        )}
        <div className="relative mb-5 mt-2 ">
          <button
            //   disabled={!validStatus || !cart?.length}
            onClick={handleSubmit}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentBox;
