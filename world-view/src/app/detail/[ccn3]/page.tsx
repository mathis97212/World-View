'use client'
import CountryCard from "@/components/CountryCard";
import Navbar from "@/components/Navbar";
import { fetchCountryData, fetchOneCountryData } from "@/services/Users/UsersService";
import { useEffect, useState } from "react";
import React from "react";

export default function Page({ params }: { params: { ccn3: string } }) {
  const [data, setData] = useState();

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
    <div className="pb-20">
      <Navbar />
    </div >
      <div>
        <ul className="country_card py-20">
        {data && data.map((d, index) => (
          <CountryCard key={index} country={d} />
        ))}
        </ul>
      </div>
    </>
  );
};

