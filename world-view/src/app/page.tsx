'use client'
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import AllCountryCard from "@/components/AllCountryCard";
import { useEffect} from "react";
import { useState } from "react";
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

  const handleNewData = (newData) => {
    setData(newData)

  if (!data) {
    return <div className="text-gray-900 fond-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text4xl">
      No country found...
      </div>;
  }

  }
  return (
    <>
      <div>
        <div className="pb-20">
          <Navbar searchData={handleNewData}/>
        </div>
        
        <div className="py-20 grid gap-4 grid-cols-3 grid-rows-3 ">
          {data.map((d, index) => (
            <AllCountryCard key={index} countries={d} />
          ))}
        </div>
      </div>
    </>
  );
}
