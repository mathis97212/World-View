import Link from "next/link";
import React from "react";
import { useState } from "react";

const CountryCard = ({ countries }) => {
  return (
    <div className="country_card">
      <Link href={`/detail/${countries.ccn3}`}>
        {countries.name.common}
      </Link>
      <div>
        <img src={countries.flags.png} alt="" />
      </div>
    </div>
  );
};

export default CountryCard;
