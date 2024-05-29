"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Employee() {
  const columns = [
    {
      name: "ID User",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.year,
      sortable: true,
    },
    
    {
      name: "Action",
      cell: () => <div className="flex gap-4 py-4"> <img src="/icons/edit.svg" className="w-5" alt="Shape" /> 
      <img src="/icons/trash.svg" className="w-5" alt="Shape" /></div>,
      sortable: false,
    },
  ];

const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-full">
      <h1 className="text-xl font-bold px-4 py-6 mb-4">
        Employee
      </h1>
      <div className="shadow-md rounded-xl border border-black w-full h-[70vh] overflow-scroll">
        <div className="p-4">
        <h1 className="text-xs font px-2 py-2">
          Show
        </h1>
        <div className="flex gap-4 py-4"> <img src="./icons/Frame 17.svg" className="w-13" alt="Shape" /></div>

          <DataTable columns={columns} data={data} pagination className="h-full" />
  
        </div>
      </div>
    </main>
  );
}