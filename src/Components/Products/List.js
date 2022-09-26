import { useLayoutEffect, useState } from "react";
import CustomButton from "../PriceButtons";
import axios from "../../utils/apiWrapper";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import AddToCartModal from "../AddToCartModal";

const ListItem = ({ item = {} }) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <AddToCartModal open={open} onClose={handleModalClose} item={item} />
      )}

      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{item.price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            <ShoppingCartIcon className="h-6 w-6" onClick={handleModalOpen} />
          </p>
        </td>
      </tr>
    </>
  );
};

const List = () => {
  const [list, setList] = useState([]);

  useLayoutEffect(() => {
    const res = axios({
      method: "get",
      url: "/products",
    }).then((res) => {
      setList(res?.products ?? []);
    });
  }, []);

  return (

    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <>
                    <ListItem key={`${item.name}-${index}`} item={item} />
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
