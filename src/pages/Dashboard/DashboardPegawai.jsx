import { useState } from "react"
import React from "react";


export default function DashboardPegawai(){


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
    return <div className="h-[80vh] w-full flex justify-center items-center">
        <div className="bg-slate-200 rounded-md flex gap-4 p-8">   
        {jenis.map(item =>{
            return <div className="bg-slate-300 py-2">
            <button onClick={() => window.location.href = `/dashboard/`+item.id}>
                <img src={item.icon} className="w-64" alt="Logo" />
                <h3 className="w-64 font-medium">{item.nama_paket}</h3>               
            </button>
        </div>
        })}
        </div>
    </div>
}