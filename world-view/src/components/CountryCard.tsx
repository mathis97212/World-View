import Link from "next/link";
import React from "react";
import { useState } from "react";

const CountryCard = ({ countries }) => {
    console.log(countries)
  return (
    <li>
      <a href={`/country/${countries.ccn3}`}>
        {countries.name.common}
      </a>
    </li>
  );
};

export default CountryCard;