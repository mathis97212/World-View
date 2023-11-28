import { NextPage } from "next";


export default async function Home() {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`);
    const data = await res.json();
  
  
    return (
      <>
        <Navbar />
          <body >
            {data[0].name.common}
          </body>
      </>
    );
  };