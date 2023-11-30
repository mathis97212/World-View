'use client'
import { fetchCountryData, fetchOneCountryData } from "@/services/Users/UsersService";
import { useEffect, useState } from "react";
import React from "react";

export default function Page({ params }: { params: { ccn3: string } }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchOneCountryData(params.ccn3).then((country) => {
      setData(country);
    });
  }, [params.ccn3]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="country_card">
        <div>
          <img src={data.flags.png} alt={`Drapeau de ${data.name.common}`} />
        </div>
        <div>
          {data.name.common}
          <p>Nom commun : {data.name.common}</p>
        </div>
      </div>
    </>
  );
};

