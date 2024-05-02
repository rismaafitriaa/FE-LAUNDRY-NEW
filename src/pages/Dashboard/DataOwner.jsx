"use client";
import DataTable from "react-data-table-component";



export default function DataOwner() {
  const columns = [
    {
      name: "ID Pesanan",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Jenis Laundry",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Total Harga",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => <span className={"p-2 text-xs rounded-full "+ (row.status == "Selesai" ? "bg-green-100 text-green-600" : row.status == "Process" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600")}>{row.status}</span>,
      sortable: true,
    },
    {
      name: "Status Bayar",
      cell: (row) => <span className={"p-2 text-xs rounded-full "+ (row.statusBayar == "Dibayar" ? "bg-green-100 text-green-600" :  "bg-red-100 text-red-600")}>{row.statusBayar}</span>,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => <div className="flex gap-4 py-4"> <img src="./icons/edit.svg" className="w-5" alt="Shape" /> 
      <img src="./icons/trash.svg" className="w-5" alt="Shape" /></div>,
      sortable: false,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Selesai",
      statusBayar: "Dibayar"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Diambil",
      statusBayar: "Belum"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Dibayar"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      status: "Process",
      statusBayar: "Dibayar"
    },
  ];

  return (
    <main className="min-h-full">
      <h1 className="text-xl font-bold px-4 py-6 mb-4">
          Order History
      </h1>
      <div className="shadow-md rounded-xl border border-black w-full h-[70vh] overflow-scroll">
        <div className="p-4">
          <DataTable columns={columns} data={data} pagination className="h-full" />
        </div>
        
      </div>
    </main>
  );
}