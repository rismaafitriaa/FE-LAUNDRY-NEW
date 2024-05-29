"use client";
import DataTable from "react-data-table-component";



export default function DataOwner() {
  const columns = [
    {
      name: "ID Pesanan",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Jenis Laundry",
      selector: (row) => row.jenis,
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row) => row.cust,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.qyt,
      sortable: true,
    },
    {
      name: "Total Harga",
      selector: (row) => row.price,
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
      cell: (row) => <div className="flex gap-4 py-4"> <img src="/icons/edit.svg" className="w-5" alt="Shape" /> 
      <img src="/icons/trash.svg" className="w-5" alt="Shape" /></div>,
      sortable: false,
    },
  ];
  const data = [
    {
      id: 1,
      jenis: "Cuci Komplit",
      cust: "Twiska Kediri",
      date: "16-09-2024",
      qyt: "3",
      price: "10.000",
      status: "Selesai",
      statusBayar: "Dibayar"
    },
    {
      id: 2,
      jenis: "Cuci Satuan",
      cust: "Nadila Mimisan",
      date: "20-09-2024",
      qyt: "1",
      price: "3.000",
      status: "Selesai",
      statusBayar: "Dibayar"
    },
    {
      id: 3,
      jenis: "Cuci Satuan",
      cust: "Dildil",
      date: "20-09-2024",
      qyt: "5",
      price: "15.000",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 4,
      jenis: "Cuci Kering",
      cust: "Kancil",
      date: "21-09-2024",
      qyt: "10",
      price: "20.000",
      status: "Diambil",
      statusBayar: "Belum"
    },
    {
      id: 5,
      jenis: "Cuci Komplit",
      cust: "Curuuttt",
      date: "21-09-2024",
      qyt: "25",
      price: "75.000",
      status: "Process",
      statusBayar: "Dibayar"
    },
    {
      id: 6,
      jenis: "Cuci Kering",
      cust: "Tinny",
      date: "27-09-2024",
      qyt: "2",
      price: "4.000",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 7,
      jenis: "Cuci Satuan",
      cust: "Winny",
      date: "29-09-2024",
      qyt: "6",
      price: "18.000",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 8,
      jenis: "Cuci Satuan",
      cust: "Harry Puter",
      date: "29-09-2024",
      qyt: "17",
      price: "55.000",
      status: "Process",
      statusBayar: "Belum"
    },
    {
      id: 9,
      jenis: "Cuci Komplit",
      cust: "Nadia Omara",
      date: "29-09-2024",
      qyt: "1",
      price: "5.000",
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