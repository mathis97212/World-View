'use client'
import Head from "next/head"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import CountryCard from "@/components/CountryCard";
import { apiURL } from "@/utils/api";

export default async function Home() {

  const res = await fetch(apiURL)
  const data = await res.json();


  return (
    <>
      <Navbar />
      <section className="flex">
            {data.map((d, index) => (
                <CountryCard key={index} countries={d} />
            ))}
        </section>
    </>
  );
};