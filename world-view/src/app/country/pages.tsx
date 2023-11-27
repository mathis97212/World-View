import { NextPage } from "next";

export default async function Home() {

    const res = await fetch(`https://restcountries.com/v3.1/${page}`);
    const data = await res.json();
  
  
    return (
      <>

          <body >
            {data[0].name.common}
          </body>
      </>
    );
  };