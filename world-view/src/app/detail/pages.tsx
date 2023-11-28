import { NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const CountryDetail: NextPage = () => {
  const router = useRouter();
  const { cca2 } = router.query;

  const fetchData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`);
    const data = await res.json();
    return data;
  };

  const renderData = async () => {
    const data = await fetchData();

    return (
      <>
        <Navbar />
        <body>
          {data[0].name.common}
        </body>
      </>
    );
  };

  return renderData();
};

export default CountryDetail;
