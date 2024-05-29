import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function LayoutPeg() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-[80px] bg-[#512DA8] min-h-full p-2">
          <ul className="flex flex-col gap-8 py-4 w-full mx-auto justify-center items-center">
            <li className="pb-4"><img src="/icons/Shape.svg" className="w-6" alt="Shape" /></li>
            <li className="w-full items-center flex justify-center opacity-50"><button><img src="/icons/dashboard.svg" className="w-6" alt="Shape" /></button></li>
            <li className="w-full items-center flex justify-center border-l-2 border-white border-separate"><button><img src="/icons/TO- Do.svg" className="w-6" alt="Shape" /></button></li>
            <li className="w-full items-center flex justify-center opacity-50"><img src="/icons/Contact.svg" className="w-6" alt="Shape" /></li>
            <li><img  src="/icons/logout.svg" className="w-6" alt="Shape" /></li>
          </ul>
        </div>
        <div className="min-h-full gap-2 w-full overflow-hidden">
          <div className="bg-default flex justify-between px-4 py-2">
            <div className="flex gap-6 items-center justify-start">
              <form onSubmit={handleSearch} className="flex flex-row-reverse text-sm">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-black px-2 py-1 rounded-md items-center"
                />
                <button type="submit" className="ml-2 text-white">
                  <img src="/icons/search.svg" alt="svg" />
                </button>
              </form>
            </div>

            <div className="flex gap-4 text-white font-medium items-center px-4 py-1">
              <img
                src={"/pocoyo.png"}
                alt="User"
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
              Pocoyo
              <span className="text-xs font-normal">Pegawai</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-8 py-4 justify-between min-h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
