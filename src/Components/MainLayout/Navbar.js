import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const DropDownMenu = (props) => {
    const navigate = useNavigate();
  const [{ cart = [] }] = useStateValue();
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <div className="block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    onClick={()=> {navigate("products")}}
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex items-center">
              <div className="block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {cart?.length ? (
                    <strong className="relative inline-flex items-center rounded  px-2.5 py-1.5 text-xs font-medium">
                      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-600 flex justify-center items-center items">
                        <span>{cart?.length}</span>
                      </span>
                      <ShoppingCartIcon className="h-6 w-6 text-black-800 heroicon-stroke-w-1.2" />
                    </strong>
                  ) : (
                    <ShoppingCartIcon className="h-6 w-6 text-black-800 heroicon-stroke-w-1.2" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default DropDownMenu;
