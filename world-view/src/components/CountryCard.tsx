import Link from "next/link";
import React from "react";
import { useState } from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country_card">
      <div>
        <img src={country.flags.png} alt="" />
      </div>
        {country.name.common}
    </div>
  );
};

export default CountryCard;
