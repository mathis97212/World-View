import Link from "next/link";
import React from "react";
import { useState } from "react";

const CountryCard = ({ countries }) => {
  return (
    <li>
      <Link href={`${countries.ccn3}`}>
        {countries.name.common}
      </Link>
    </li>
  );
};

export default CountryCard;