'use client'
import { fetchCountryData, fetchOneCountryData } from "@/services/Users/UsersService";
import { useEffect, useState } from "react";
import React from "react";

export default function Page({ params }: { params: {ccn3: string}}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCountryData().then((countries) => {
      setData(countries);
    });
  }, []);

    return (
      <>
    <div className="country_card">
      <div>
        <img src={data.flags.png} alt="" />
      </div>
      <div>
        {data.name.common}
      </div>
    </div>
      </>
    )
};
