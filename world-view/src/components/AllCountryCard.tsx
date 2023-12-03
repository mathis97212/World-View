import Link from "next/link";
import React from "react";
import { useState } from "react";

const AllCountryCard = ({ countries }) => {
  return (
    <div className="bg-white p-4 shadow-md mb-4">
      <div className="flex justify-center items-center mb-4">
        <img src={countries.flags.png} alt="" />
      </div >
      <div className="text-center font-mono text-xl">
        <Link href={`/detail/${countries.ccn3}`}>
          {countries.name.common}
        </Link>
      </div>
    </div>
  );
};

export default AllCountryCard;
