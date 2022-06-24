import React, { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsGrid } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import HomeMap from "../components/homemap";

function Home() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({ basemap: "dark-gray" });

    new MapView({
      map,
      center: [-118.805, 34.027],
      zoom: 13,
      container: mapRef.current,
    });
  }, []);
  return (
    <>
      <Menu>
        <nav className="fixed z-30 w-full bg-white border-b-2 border-gray-100">
          <div className="lg:px-6 py-3 px-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <Menu.Button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Menu.Button>
                <a
                  href="#"
                  className="flex items-center text-xl font-bold space-x-2"
                >
                  <span className="text-yellow-500">
                    <SiWebmoney className="w-8 h-8" />
                  </span>
                  <p className="font-fredoka text-green-700">esripay.io</p>
                </a>
              </div>
              <div className="flex items-center">
                <div className="hidden mr-6 lg:block">
                  <form action="#">
                    <label className="sr-only">Search</label>
                    <div className="relative mt-1 lg:w-64">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        className=" border  text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div className="relative inline-block ">
                  {/* Dropdown toggle button */}
                  <button className="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                    <span className="mx-1">Esri dev</span>
                    <svg
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  <div className="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="lg:flex">
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-80"
          >
            <Menu.Items>
              <div className="flex flex-col w-full px-4 py-8">
                <div className="flex flex-col justify-between mt-6">
                  <aside>
                    <ul>
                      <li>
                        <a
                          className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                          href="#"
                        >
                          <BsGrid />
                          <span className="mx-4 font-medium">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                          href="#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="mx-4 font-medium">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </Menu.Items>
          </Transition>
          <div className="fixed px-4 py-8 border-b lg:border-r lg:w-64 hidden lg:block bg-white h-[calc(100vh_-_1rem)] drop-shadow-lg">
            <div className="flex flex-col justify-between mt-6">
              <aside>
                <ul>
                  <li>
                    <a
                      className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                      href="#"
                    >
                      <BsGrid />
                      <span className="mx-4 font-medium">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>

          <div className="flex w-full h-40 bg-red-700 text-white">
            Hello this is
          </div>
        </div>
      </Menu>
    </>
  );
}

export default Home;
