import Link from "next/link";
import React from "react";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { ICountry } from "@/shared/interfaces";

const Navbar = ({ searchData }: ICountry) => {
  const handleDataReceived = (data : ICountry) => {
    searchData(data);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <a href="/">
          <h1 className="ml-10 uppercase hover:border-b">Home</h1>
        </a>

        <div>
          <ul>
            <li className="Search">
              <SearchInput onDataReceived={handleDataReceived} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
