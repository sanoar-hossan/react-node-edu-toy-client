import React, { useState } from 'react';

const Mytoytable = ({ singledata, handleDelete, handleUpdate }) => {
  const { price, quantity, detail, name, picurl, _id } = singledata;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  const [updatedDetail, setUpdatedDetail] = useState(detail);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();

    if (updatedPrice === price && updatedQuantity === quantity && updatedDetail === detail) {
      // No fields were updated
      return;
    }

    const updatedToy = {
      _id,
      price: updatedPrice,
      quantity: updatedQuantity,
      detail: updatedDetail,
    };

    handleUpdate(updatedToy);
    toggleModal();
  };

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-warning">
          Delete
        </button>
      </th>
      <td>{name}</td>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">{picurl && <img src={picurl} alt="Avatar" />}</div>
        </div>
      </td>
      <td>{detail}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
        <button onClick={toggleModal} className="btn btn-ghost btn-outline">
          Update
        </button>
      </td>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div className="mt-2">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        defaultValue={updatedPrice}
                        onChange={(e) => setUpdatedPrice(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        defaultValue={updatedQuantity}
                        onChange={(e) => setUpdatedQuantity(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="detail" className="block text-sm font-medium text-gray-700">
                        Detail Description
                      </label>
                      <textarea
                        id="detail"
                        className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        defaultValue={updatedDetail}
                        onChange={(e) => setUpdatedDetail(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        onClick={handleUpdateClick}
                        className="btn btn-primary mr-2"
                      >
                        Update
                      </button>
                      <button onClick={toggleModal} className="btn btn-ghost btn-outline">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

export default Mytoytable;
