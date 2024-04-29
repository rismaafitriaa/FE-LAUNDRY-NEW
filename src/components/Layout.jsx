import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-w-full bg-gradient-to-b from-blue-500 to-purple-500 flex justify-between px-12 py-4">
        <div className="flex gap-4">
          <img src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl text-white font-semibold">Laundry</h1>
        </div>
        <div className="items-center justify-between hidden md:flex">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-gray-200 transition-all rounded md:bg-transparent md:p-0"
              >
                Home
              </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 px-3 text-white hover:text-gray-200 transition-all rounded md:bg-transparent md:p-0"
              >
                Riwayat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-gray-200 transition-all rounded md:bg-transparent md:p-0"
              >
                Logout
              </a>
            </li>
          </ul>
        </div> 
        <div className="flex gap-6 text-white font-medium items-center">
          Pocoyo
          <img
            src={"/pocoyo.png"}
            alt="User"
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="flex h-screen w-full">
        <div className="flex-auto flex flex-col justify-between w-full h-full px-8 py-4">
          <Outlet />
          <div>
            <p className="text-sm">&copy; 2024 Copyright x</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 flex justify-center items-center py-4">
        <p className="text-sm text-white">&copy; 2024 Copyright x</p>
      </div>
    </div>
  );
}