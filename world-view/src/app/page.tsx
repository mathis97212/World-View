'use client'
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import AllCountryCard from "@/components/AllCountryCard";
import { useEffect} from "react";
import { useState } from "react";
import { fetchCountryData } from "@/services/Users/UsersService";
import { ICountry, ICountryCommonNativeName } from "@/shared/interfaces";


export default function Home() {
  const [data, setData] = useState<ICountry[]>([]);

  useEffect(() => {
    fetchCountryData().then((countries : ICountry[]) => {
      const sortedCountries = countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      setData(sortedCountries);
    });
  }, []);

  const handleNewData = (newData: ICountry[]) => {
    setData(newData)

  }
  return (
    <>
      <div>
        <div className="pb-20">
          <Navbar searchData={handleNewData}/>
        </div>
        <div className="flex-wrap country-list flex justify-center py-20 gap-4 ">
          {data.map ? data.map((d: ICountry, index) => (
            <AllCountryCard key={index} countries={d} />
          )) : 
          <div className="text-gray-900 fond-bold uppercase items-center justify-center text-center h-screen text4xl">
            No country found...
          </div>
          }
        </div>
      </div>
    </>
  );
}
