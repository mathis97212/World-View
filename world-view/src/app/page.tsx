'use client'
import Head from "next/head"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import CountryCard from "@/components/CountryCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="">
            {countries.map((country, index) => (
                <CountryCard key={index} name={country.name} flag={country.flag} detail={country.detail} />
            ))}
        </section>
    </>
  );
};