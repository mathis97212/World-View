'use client'
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import CountryCard from "@/components/CountryCard";
import { useEffect, useState } from "react";
import { fetchCountryData } from "@/services/Users/UsersService";

export default function Home() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    fetchCountryData().then((countries) => {
      const sortedCountries = countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      setData(sortedCountries);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {data && data.map((d, index) => (
          <CountryCard key={index} countries={d} />
        ))}
      </div>
    </>
  );
}
