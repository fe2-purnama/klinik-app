import React from "react";
import Logout from "./../assets/logout.png";
import Queue from "./../assets/queue.png";

export default function Component() {
  return (
    <>
      <aside className="h-full px-3 py-4 bg-white">
        <ul className="flex flex-col justify-between h-full space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
            >
              <img src={Queue} />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Daftar Antrian
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
            >
              <img src={Logout} />
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
