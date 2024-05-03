import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

export default function FormOrder() {
    const { type } = useParams();
    const [customerName, setCustomerName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleCustomerNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Order Form</h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={customerName}
                        onChange={handleCustomerNameChange}
                        placeholder="Customer Name"
                        className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="Quantity"
                        className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-md w-full">
                    Add
                </button>
            </div>
        </div>
    );
}
