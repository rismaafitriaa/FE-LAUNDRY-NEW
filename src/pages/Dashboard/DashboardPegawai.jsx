import { Link } from "react-router-dom";

export default function DashboardPegawai() {
    const jenis = [
        {
            id: 1,
            nama_paket: "Cuci Komplit",
            icon: "/komplitlaund.svg",
            width: '60px',
            height: '60px'
        },
        {
            id: 2,
            nama_paket: "Cuci Kering",
            icon: "/dry.svg",
            width: '60px',
            height: '60px'
        },
        {
            id: 3,
            nama_paket: "Cuci Satuan",
            icon: "/satuan.svg",
            width: '60px',
            height: '60px'
        }
    ]

    return (
        <div className="h-[80vh] w-full flex justify-center items-center">
            <div className="bg-slate-100 p-8 rounded-[15px]">
                <div className="w-full mb-4">
                    <h1 className="text-xl font-bold text-center">Order History</h1>
                </div>
                <div className="rounded-md flex gap-10 justify-center">
                    {jenis.map(item => (
                        <div className="bg-white p-4 shadow-lg rounded-[15px]" key={item.id}>
                            <Link to={`/formOrder?id=${item.id}`} className="flex flex-col items-center">
                                <img 
                                    src={item.icon} 
                                    className="mb-2" 
                                    alt={item.nama_paket} 
                                    style={{ width: item.width, height: item.height }} 
                                />
                                <h3 className="font-medium">{item.nama_paket}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
