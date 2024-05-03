import { useState } from "react";
import React from "react";

export default function DashboardPegawai() {
    const [jenis, setJenis] = useState([
        {
            id: 1,
            nama_paket: "Paket Anjayy",
            icon: "/logo.png",
        },
        {
            id: 2,
            nama_paket: "Paket Gacorrr",
            icon: "/logo.png",
        },
        {
            id: 3,
            nama_paket: "Paket Anjayy",
            icon: "/logo.png",
        }
    ]);

    return (
        <div className="h-[80vh] w-full flex justify-center items-center ">
            <div className="bg-slate-100 p-8 c rounded-[15px]">
                <div className="w-full mb-4">
                    <h1 className="text-xl font-bold rounded-md text-center">Order History</h1>
                </div>
                <div className="rounded-md flex gap-10 justify-center">
                    {jenis.map(item => {
                        return (
                            <div className="bg-white py-2 shadow-lg rounded-[15px]" key={item.id}>
                                <button onClick={() => window.location.href = `/dashboard/${item.id}`}>
                                    <img src={item.icon} className="w-64" alt="Logo" />
                                    <h3 className="w-64 font-medium">{item.nama_paket}</h3>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
