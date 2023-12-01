'use client'
import CountryCard from "@/components/CountryCard";
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
  console.log(data)

  return (
    <>
      <div className="country_card">
        <CountryCard country={data}/>
      </div>
    </>
  );
};

