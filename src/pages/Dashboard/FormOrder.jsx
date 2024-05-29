import { useState } from "react";
import { addTransaction } from "../../api/transaction";

export default function FormOrder() {
  const queryParams = new URLSearchParams(window.location.search);
  const paketId = queryParams.get("id");

  const [data, setData] = useState({
    id_paket: paketId,
    qty: 0,
    customer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTransaction = async(e) => {
    e.preventDefault()
    const response = await addTransaction(data)
    alert(response.message || response)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleTransaction} className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Order Form</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="customer"
            value={data.customer}
            onChange={handleChange}
            placeholder="Customer Name"
            className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            name="qty"
            value={data.qty}
            onChange={handleChange}
            placeholder="Quantity"
            className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="block py-3 px-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 text-white hover:opacity-80 transition-all w-full text-center"
            aria-current="page"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
