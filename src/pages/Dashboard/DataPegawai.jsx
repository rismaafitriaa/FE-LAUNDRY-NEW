"use client";
import DataTable from "react-data-table-component";

export default function DataPegawai() {
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
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Status Bayar",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.year,
      sortable: false,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <main>
      <div className="border border-black w-full h-full rounded-xl mb-2">
        <h1 className="text-xl font-bold px-4 py-6 mb-4">
          Riwayat Pemesanan
        </h1>
        <DataTable columns={columns} data={data} pagination />
      </div>
    </main>
  );
}
