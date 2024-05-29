import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTransaction } from "../../api/transaction";

export default function DataPegawai() {
  const [data, setData] = useState([]);
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
      cell: (row) => (
        <span
          className={
            "p-2 text-xs rounded-full " +
            (row.status == "Selesai"
              ? "bg-green-100 text-green-600"
              : row.status == "Process"
              ? "bg-orange-100 text-orange-600"
              : "bg-blue-100 text-blue-600")
          }
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Status Bayar",
      cell: (row) => (
        <span
          className={
            "p-2 text-xs rounded-full " +
            (row.statusBayar == "Dibayar"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600")
          }
        >
          {row.statusBayar}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <div className="flex gap-4 py-4">
          {" "}
          <img src="/icons/edit.svg" className="w-5" alt="Shape" />
          <img src="/icons/trash.svg" className="w-5" alt="Shape" />
        </div>
      ),
      sortable: false,
    },
  ];

  const formatData = (data) => (
    {
      id: data.kode_invoice,
      jenis: data.paket.nama_paket,
      cust: data.customer,
      date: data.tgl,
      qyt: data.qty,
      price: data.total_harga,
      status: data.status,
      statusBayar: data.status_bayar,
    }
  )
  // const datas = [
  //   {
  //     id: 1,
  //     jenis: "Cuci Komplit",
  //     cust: "Twiska Kediri",
  //     date: "16-09-2024",
  //     qyt: "3",
  //     price: "10.000",
  //     status: "Selesai",
  //     statusBayar: "Dibayar",
  //   },
  // ];

  const fetchData = async () => {
    const response = await getTransaction();
    setData(response)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="min-h-full">
      <h1 className="text-xl font-bold px-4 py-6 mb-4">Order History</h1>
      <div className="shadow-md rounded-xl border border-black w-full h-[70vh] overflow-scroll">
        <div className="p-4">
          <DataTable
            columns={columns}
            data={data.map((content) => formatData(content) )}
            pagination
            className="h-full"
            subHeader
            subHeaderComponent={<>Tester</>}
          />
        </div>
      </div>
    </main>
  );
}
