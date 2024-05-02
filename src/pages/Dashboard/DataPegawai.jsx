"use client";
import DataTable from "react-data-table-component";
import React from "react";



export default function DataPegawai() {
  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
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
      cell: (row) => <div className="flex gap-4 py-4"> <img src="/icons/edit.svg" className="w-5" alt="Shape" /> 
      <img src="/icons/trash.svg" className="w-5" alt="Shape" /></div>,
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
	const filteredItems = data.filter(
		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
	);
    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <div className="flex w-full">
            <div class="relative w-full min-w-[200px] h-10">
                <input
                    class="peer border-gray-400 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-gray-900 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" " type="text" /><label
                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Search
                </label>
            </div>
        </div>
    );
	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);




  return (
    <main className="min-h-full">
      <h1 className="text-xl font-bold px-4 py-6 mb-4">
          Order History
      </h1>
      <div className="shadow-md rounded-xl border border-black w-full h-[70vh] overflow-scroll">
        <div className="p-4">
          <DataTable columns={columns} data={data} pagination className="h-full" subHeader
			subHeaderComponent={subHeaderComponentMemo} />
        </div>
      </div>
    </main>
  );
}