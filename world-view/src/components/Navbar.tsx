import Link from "next/link";
import React from "react";
import { useState } from "react";
import SearchInput from "./SearchInput";


const Navbar = () => {

  const GetCountryByName = async(countryName) => {
    const res = await fetch(`https://restcountries.com/v3.1/name${countryName}`);
    const data = await res.json();
  }

    return(
        <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">                
          <Link href="/">
            <h1 className="ml-10 uppercase hover:border-b">Home</h1>
          </Link>

          <div>
            <ul>
              <div className="Search">
                <SearchInput onSearch/>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;